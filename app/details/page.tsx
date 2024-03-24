"use client"

import Title from "@/components/title";
import Image from "next/image";
import { CAROUSEL_CONTENT } from "@/scripts/constants";
import { Carousel } from "@material-tailwind/react";

export default function Details () {
    return (
      <main className="min-w-screen min-h-screen">
        <div>
          <Image priority={true} className="h-screen object-cover opacity-50" src="/heros/details.jpg" height={1080} width={1920} alt=""/>
          <div className="h-screen object-cover w-screen bg-green-200 absolute left-0 top-28 -z-10"></div>
          <Title title="DETAILS"></Title>
        </div>  
        <h2 className="h2 pt-10 mx-14">There are many types of green solutions.</h2>
        <p className="py-8 mx-14">There are 5 main types of green energy for you to explore for your home: solar, wind, geothermal, hydroelectric, and biomass. Information on each has been compiled below to aid in your decision as to what may be right for you.</p>
        <Carousel placeholder="" className="w-screen h-fit overflow-hidden border-green-100 border-t-8">
          {CAROUSEL_CONTENT.map((a) => (
            <div key={a.title} className="relative w-screen h-full">
              <Image className="h-screen w-screen object-cover" src={a.image} alt={a.title} width={1080} height={1920}/>
              <div className="absolute inset-0 flex flex-col h-full p-8 w-full place-items-center text-center bg-black-50/80">
                <h1 className="font-bold tracking-widest text-2xl md:h1 py-12">{a.title}</h1>
                <p className="whitespace-pre-line w-7/12 leading-loose text-base line-clamp-6 md:line-clamp-none">{a.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </main>
    );
  }
  