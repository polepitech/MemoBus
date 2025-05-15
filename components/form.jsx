'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from './ui/label';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';

export default function Form() {
  const [loading, setLoading] = React.useState(false);

  const handlesubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const result = await fetch('/api/ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await result.json();
    console.log(json.message);
    if(result.status == 200){
       gsap.to('.bus',{
        x:'100vw',
        duration: 1,
        ease: 'power3.in'
      })
      setTimeout(() => {
          thx();
      }, 1000);
    }
  }
  
  const thx = () =>{
    setLoading(false);
    gsap.to('.bus',{
     display:'none'
   })
    gsap.to('.card',{
      x:'100vw',
      duration: 1,
      ease: 'power3.in'
    })
    gsap.to('.thxCard',{
     opacity:1,
     duration: 0.75,
     delay: 0.75,
     ease: 'power3.in'
   })
  }
  useEffect(() => {
    
    
    
  }, [])
  

  return (
    <>
      <Card className="card p-6 w-[85vw] md:w-[75vw] lg:w-[60vw] m-auto mt-4">
          <CardHeader>
            <CardTitle className={'text-2xl'}>Réserve ton ticket !</CardTitle>
            <div className="txt flex justify-between items-center">
              <p className='w-[80%] text-justify text-xs sm:text-sm md:text-md lg:text-lg text-gray-700 font-thin'>Cette navette mise en place pour vous ammener de La Ferté-sous-Jouarre jusqu'au festival est gratuite. Afin de nous aider à nous organiser dis nous quand tu pense être la </p>
              <Image className='w-[12vw] sm:w-[7vw] md:w-[6vw] lg:w-[5vw]' src='/assets/perso3.png' width={500} height={1000} alt='bus'/>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlesubmit} className="space-y-4">
                  <Input required name='prenom' type="text" placeholder="Ton petit nom ?" />
                  <Input required name='email' type="email" placeholder="Un mail ?" />
                  <Label>Aller</Label>
                  <div className="aller flex justify-between">
                    <Select required name='Aller'>
                      <SelectTrigger className="w-[48%]">
                        <SelectValue placeholder="Choisi ton Jour" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="vendredi">Vendredi</SelectItem>
                          <SelectItem value="samedi">Samedi</SelectItem>
                          <SelectItem value="dimanche">Dimanche</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select required name='Aller_Horraire'>
                      <SelectTrigger className="w-[48%]">
                        <SelectValue placeholder="Choisi l'horraire" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="12h">12H00</SelectItem>
                          <SelectItem value="13h">13H00</SelectItem>
                          <SelectItem value="14h">14H00</SelectItem>
                          <SelectItem value="15h">15H00</SelectItem>
                          <SelectItem value="16h">16H00</SelectItem>
                          <SelectItem value="17h">17H00</SelectItem>
                          <SelectItem value="18h">18H00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>


                  <Label>Retour ?</Label>
                  <div className="retour flex justify-between">
                    <Select name='Retour'>
                      <SelectTrigger className="w-[48%]">
                        <SelectValue placeholder="Choisi ton Jour" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="vendredi">Vendredi</SelectItem>
                          <SelectItem value="samedi">Samedi</SelectItem>
                          <SelectItem value="dimanche">Dimanche</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select name='Retour_Horraire'>
                      <SelectTrigger className="w-[48%]">
                        <SelectValue placeholder="Choisi l'horraire" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10h">12H00</SelectItem>
                          <SelectItem value="11h">12H00</SelectItem>
                          <SelectItem value="12h">12H00</SelectItem>
                          <SelectItem value="13h">13H00</SelectItem>
                          <SelectItem value="14h">14H00</SelectItem>
                          <SelectItem value="15h">15H00</SelectItem>
                          <SelectItem value="16h">16H00</SelectItem>
                          <SelectItem value="17h">17H00</SelectItem>
                          <SelectItem value="18h">18H00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

              {!loading && (<Button type="submit" className="w-full mb-4 mt-4">Réserver</Button>)}
              {loading && (
                <Button disabled className={'w-full mb-4 mt-4'}>
                  <Loader2 className="animate-spin" />
                  ça charge ...
                </Button>
              )}
            </form>
          </CardContent>
      </Card>
      <div className="thxCard p-6 w-[85vw] md:w-[75vw] lg:w-[60vw] border-2 rounded-lg z-1 bg-white opacity-0 absolute h-[60vh] pointer-events-none">
            <div className="flex flex-col items-center gap-10 h-full">
              <h2 className="text-2xl md:text-4xl font-bold limelight mb-2">Ton ticket est bien reservé !</h2>
              <Image className='w-[25vw] lg:w-[15vw]' src="/assets/bus.png" alt="Merci Bus" width={400} height={250} />
              <p className="text-center text-2xl text-gray-700 mb-4">
                Merci pour ton temps.<br />
                Tu recevras un email de confirmation.<br />
                On se retrouve au festival !
              </p>
            </div>
      </div>
    </>
  )
}
