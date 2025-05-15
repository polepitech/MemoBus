'use client'
import { gsap } from '@/app/lib/gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Bus() {
  useEffect(() => {
    gsap.to('.roue', {
      rotate: 360,
      repeat: -1,
      ease: 'none',
      duration: 1,
      transformOrigin: '50% 50%',
    });
    gsap.to('.van', {
      y: 3,
      repeat: -1,
      ease: 'none',
      yoyo:true,
      duration: 0.2,
      transformOrigin: '50% 50%',
    });
  }, []);
  return (
    <div className='flex justify-center gap-10 items-center'>
      <h1 className='text-[9vw] md:text-[6vw] limelight'>MemoBus</h1>
      <div className="bus w-[25vw] lg:w-[15vw] relative">
        <Image className='van w-full' src='/assets/bus.png' width={2000} height={1000} alt='bus'/>
        <Image className='roue w-[20%] absolute bottom-[12%] left-[15%]' src='/assets/roue.png' width={200} height={200} alt='roue_arriere'/>
        <Image className='roue w-[20%] absolute bottom-[12%] right-[12%]' src='/assets/roue.png' width={200} height={200} alt='roue_arriere'/>
      </div>
    </div>
  )
}
