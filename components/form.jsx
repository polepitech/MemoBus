'use client'
import React from 'react'
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

export default function Form() {
  const [loading, setLoading] = React.useState(false);

  const handlesubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
  }

  return (
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
                  <Select required>
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
                  <Select required>
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
                        <SelectItem value="17h">16H00</SelectItem>
                        <SelectItem value="18h">16H00</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>


                <Label>Retour ?</Label>
                <div className="retour flex justify-between">
                  <Select>
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
                  <Select>
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
                        <SelectItem value="17h">16H00</SelectItem>
                        <SelectItem value="18h">16H00</SelectItem>
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
  )
}
