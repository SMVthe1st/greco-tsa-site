"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "@/components/title";

export default function AboutHero () {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
            <Image priority={true} className="h-screen object-cover w-2/4 border-green-100 border-l-8 border-b-8 opacity-50" src="/heros/about.png" height={1080} width={1920} alt=""/>
            <div className="h-screen object-cover w-2/4 bg-green-200 absolute left-0 top-28 -z-10"></div>
            <Image className="h-full object-cover object-left absolute top-28 right-0 w-2/4 h-screen -z-50" src="/circlez.svg" width="546" height="832" alt=""/>
            <Title title="ABOUT"/>
        </motion.div> 
    );
};