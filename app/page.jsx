import Bus from "@/components/ui/bus";
import Form from "@/components/form";
import Image from "next/image";
import { gsap } from "./lib/gsap";




export default function Home() {

  return (
    <div className="">
      <Bus />
      <Form/>
      <div className="fond">
        <Image className='perso2 mix-blend-hard-light opacity-40 -z-1 w-[60vw]  sm:w-[60vw] md:w-[40vw] xl:w-[30vw] absolute -right-20 -bottom-5' src='/assets/perso2.png' width={2000} height={1000} alt='bus'/>
        <Image className='perso1 mix-blend-hard-light opacity-40 -z-1 w-[60vw]  sm:w-[60vw] md:w-[40vw] xl:w-[30vw] absolute -left-0 -bottom-5' src='/assets/perso1.png' width={2000} height={1000} alt='bus'/>
      </div>
    </div>
  );
}
