import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function POST(req){
 

    const body = await req.json();
    // console.log(body);

  
    const {prenom,email,Aller,Retour,Aller_Horraire,Retour_Horraire,telephone} = body;
    if (!prenom || !email || !telephone) {
        return NextResponse.json({ message: "Tout les champs ne sont pas rempli" }, { status: 400 });
    }else{
        try {
            const data = { 
                Nom: prenom,
                Email: email,
                Telephone: parseInt(telephone),
                Aller: Aller,
                Retour: Retour,
                Aller_Horraire: Aller_Horraire,
                Retour_Horraire: Retour_Horraire
            }
            const ticket = await prisma.ticket.create({
                data:data
            });
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
            const mail = await fetch(`${baseUrl}/api/mail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const res = await mail.json()
            .then(json => console.log(json));
            return NextResponse.json({message: "Ticket créé id : "+ ticket.id}, {status: 200});
            
        } catch (error) {
            return NextResponse.json({ message: "Error :"+error }, { status: 500 });
        }
    }
 }