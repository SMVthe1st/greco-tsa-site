"use client"

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SOURCE_LINKS, CARD_CONTENT } from "@/scripts/constants";
import { Card, CardBody } from "@material-tailwind/react";
import { motion } from "framer-motion"

export default function Home () {
  return (
    // <motion.main className="w-screen w-full" initial={{x: -20, opacity: 0}} animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}>
    <main>
      <div className="h-screen w-full">
        <h1 className="stroke-text opacity-30 lg:opacity-100 tracking-widest absolute top-28 -left-20 md:-left-36">GRECO</h1>
        <div className="md:px-4 py-0 lg:w-2/4 flex flex-col text-left mt-10 mx-6 lg:ml-0">
          <h1 className="relative text-5xl lg:text-8xl tracking-widest font-extrabold p-4" style={{ letterSpacing : 25 }}>GRECO</h1>
          <h2 className="h2 p-4">Green Renewable Energy Consolidation Operation</h2>
          <p className="p-4 pb-4">The latest and greatest clean energy initiative, here to help homeowners like you find the most efficient and cost-effective solutions keeping our planet, and your pocket, healthy.</p>
          <Link href="/about" className="text-center mt-6 h1 !ml-8 md:!ml-14 !text-lg relative bg-green-200 rounded-lg p-4 w-60">
            EXPLORE
            <FaArrowRight className="inline-flex text-white ml-10" />
          </Link>
        </div>        
        <Image className="h-full object-cover object-left absolute top-0 right-0 w-2/4 -z-50" src="/circlez.svg" width="546" height="832" alt=""/>
        <svg className="hidden lg:block fill-green-100 absolute bottom-0 right-0 -z-50" width="500" viewBox="0 0 539 759" xmlns="http://www.w3.org/2000/svg">
          <path d="M268.767 717.143C186.343 711.659 72.9569 721.905 1 760H547V660C478.532 692.035 335.927 717.143 268.767 717.143Z"/>
          <path d="M375.5 202L391.521 733H359.479L375.5 202Z"/>
          <circle cx="376" cy="210" r="5"/>
          <path d="M270.669 202.284L377.308 210.149L164.839 217.568L270.669 202.284Z"/>
          <path d="M412.685 122.558L373.985 222.238L429.01 16.8837L412.685 122.558Z"/>
          <path d="M438.793 288.712L371.818 205.358L522.147 355.687L438.793 288.712Z"/>
          <path d="M221.907 435.105L232.464 785H211.35L221.907 435.105Z"/>
          <circle cx="222.237" cy="440.376" r="3.29468"/>
          <path d="M152.831 435.292L223.099 440.474L83.0956 445.363L152.831 435.292Z"/>
          <path d="M246.41 382.758L220.91 448.441L257.168 313.125L246.41 382.758Z"/>
          <path d="M263.614 492.243L219.481 437.317L318.539 536.375L263.614 492.243Z"/>
        </svg>
      </div>   
      <hr className="md:hidden relative mt-4 m-14 border-green-50"></hr>   
      <h2 className="h2 p-4 text-center mb-14 md:-mt-24">Created with the help of several trustworthy sources</h2>
      <div className="relative grid grid-flow-row auto-rows-max md:grid-cols-4 lg:grid-cols-9 place-content-center justify-center overflow-hidden pt-2 p-8 gap-8 text-center">
        {SOURCE_LINKS.map((a) => (
            <Link key={a.label} href={a.href} className="">
                {a.label}
            </Link>
        ))}
      </div>
      <hr className="relative m-14 border-green-50"></hr> 
      <div className="mt-8 relative mx-0 gap-20 md:flex flex-wrap w-full items-center justify-center">
        {CARD_CONTENT.map((b) => (
          <Link key="1" href={b.link}>
            <Card placeholder="" className="mt-6 w-full md:w-96">
              <CardBody className="inline-flex flex-col gap-8 text-center items-center justify-center" placeholder="" >
                <div dangerouslySetInnerHTML={{ __html: b.svg}}></div>
                <h2 className="tracking-widest text-center font-bold text-lg text-green-50">{b.title}</h2>
                <p className="text-white-50">{b.content}</p>            
                <FaArrowRight className="text-green-50 text-lg"/>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
      <hr className="relative m-14 border-green-50"></hr> 
      <div className="">
        <h1 className="mt-10 pl-8 h1">Mission</h1>  
        <div className="relative md:float-right w-96 h-full m-8 mt-0">
          <div className="h-96 w-48 bg-green-50 absolute right-40 top-8 -z-10"></div>
          <Image className="h-96 w-48 object-cover m-14" src="/images/home.png" alt="windmill" height={1080} width={1920}/>
          <div className="h-96 w-48 bg-green-150/30 m-14 absolute right-20 top-0"></div>
          <div className="h-96 w-48 bg-transparent border-green-50 border-r-2 border-b-2 absolute right-28 bottom-8 -z-10"></div>
        </div>
        <p className="py-8 px-4">
          Energy reserves are slowly but surely getting exhausted. Without fossil fuels to burn, the world can’t function. Yet every ounce of carbon dioxide in the sky affects our planet; we can see it for ourselves as extreme weather events become more and more common, as storms get more severe, as it snows less and less. Climate change affects the environment, animals, and us humans.
          <br/>
          <br/>
          So, how do we prevent it?
          It starts with you, the typical homeowner. Instead of fossil fuels, we can convert to renewable energy sources, such as solar power. Every big thing starts with a small thing--and you can be that. Switching to green energy can be a fantastic, cost-effective option for your home. So, why not?
          <br/>
          <br/>
          GRECO’s mission is to make renewable energy more accessible to typical homeowners by education them about opportunities. Only through education can there be change.
        </p>
      </div>
    </main>
    // </main></motion.main>
  );
}
