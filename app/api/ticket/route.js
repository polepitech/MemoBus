import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function POST(req){
 

    const body = await req.json();
    // console.log(body);

  
    const {prenom,email,Aller,Retour,Aller_Horraire,Retour_Horraire} = body;
    if (!prenom || !email || !Aller || !Aller_Horraire) {
        return NextResponse.json({ message: "Tout les champs ne sont pas rempli" }, { status: 400 });
    }else{
        try {
            const ticket = await prisma.ticket.create({
                data:{
                    Nom: prenom,
                    Email: email,
                    Aller: Aller,
                    Retour: Retour,
                    Aller_Horraire: Aller_Horraire,
                    Retour_Horraire: Retour_Horraire,
                }
            });
            return NextResponse.json({message: "Ticket créé id : "+ ticket.id}, {status: 200});
            
        } catch (error) {
            return NextResponse.json({ message: "Error :"+error }, { status: 500 });
        }
    }
 }