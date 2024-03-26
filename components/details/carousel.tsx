"use client"

import Image from "next/image";
import { CAROUSEL_CONTENT } from "@/scripts/constants";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function DetailsCarousel () {
    return (
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}>
            <Carousel placeholder="" className="w-screen h-fit overflow-hidden border-green-100 border-t-8">
                {CAROUSEL_CONTENT.map((a) => (
                    <div key={a.title} className="relative w-screen h-full">
                        <Image className="h-screen w-screen object-cover" src={a.image} alt={a.title} width={1080} height={1920}/>
                        <div className="absolute inset-0 flex flex-col h-full p-8 w-full place-items-center text-center bg-black-50/80">
                        <h1 className="font-bold tracking-widest text-2xl md:h1 pt-16 pb-20">{a.title}</h1>
                        <p className="whitespace-pre-line w-7/12 leading-loose text-base line-clamp-6 md:line-clamp-none">{a.content}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
      </motion.div>
    );
};
