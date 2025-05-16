import { EmailTemplate } from '../../../components/emailTemplate.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

    const body = await req.json();
    const {prenom,email,Aller,Retour,Aller_Horraire,Retour_Horraire} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'Memozyne <dontreply@resend.dev>',
      to: [email],
      subject: 'MemoBus tonTicket',
      react: EmailTemplate({ prenom: prenom,Aller:Aller,Retour:Retour,Aller_Horraire:Aller_Horraire,Retour_Horraire:Retour_Horraire, }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}