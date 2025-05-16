import Image from 'next/image';
import * as React from 'react';


export const EmailTemplate = ({
    prenom,email,Aller,Retour,Aller_Horraire,Retour_Horraire
}) => (
    <div style={{
        padding:'20px',
        borderRadius:'10px',
        width: '400px',
        height: '300px',
        backgroundColor:'black',
        color:'white',
        margin:'auto'
    }}>
        <div className="banner" style={{
            display:'flex',
            width:'100%'
        }}>
        <h1 style={{color:'white'}}>Merci {prenom} !</h1>
        <img alt='bus' src='https://memozyne.fr/assets/bus.png' style={{margin:'auto'}} width={150} height={100}/>
        </div>
        <p style={{textAlign:'center', fontSize:'20px', color:'white'}}>Aller: {Aller} {Aller_Horraire}</p>
        <p style={{textAlign:'center', fontSize:'20px', color:'white'}}>Retour: {Retour} {Retour_Horraire}</p>
        <br/>
        <p style={{textAlign:'center'}}>A bientot !</p>
    </div>
); 