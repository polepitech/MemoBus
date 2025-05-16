import { EmailTemplate } from '../../../components/emailTemplate.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

    const body = await req.json();

    const {Nom,Email,Aller,Retour,Aller_Horraire,Retour_Horraire} = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Memozyne <dontreply@resend.dev>',
      to: [Email],
      subject: 'MemoBus tonTicket',
      react: EmailTemplate({ prenom: Nom,Aller:Aller,Retour:Retour,Aller_Horraire:Aller_Horraire,Retour_Horraire:Retour_Horraire }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}