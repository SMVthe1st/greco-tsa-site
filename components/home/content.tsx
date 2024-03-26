"use client"

import Image from "next/image";
import { motion } from "framer-motion"

export default function HomeContent () {
    return (
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h1 className="mt-10 pl-8 h1">Mission</h1>  
            <div className="relative md:float-right w-96 h-full m-8 mt-0">
            <div className="h-96 w-48 bg-green-50 absolute right-40 top-8 -z-10"></div>
            <Image className="h-96 w-48 object-cover m-14" src="/images/home.png" alt="windmill" height={1080} width={1920}/>
            <div className="h-96 w-48 bg-green-150/30 m-14 absolute right-20 top-0"></div>
            <div className="h-96 w-48 bg-transparent border-green-50 border-r-2 border-b-2 absolute right-28 bottom-8 -z-10"></div>
            </div>
            <p className="py-8 px-4">
            Energy reserves are slowly but surely getting exhausted. Without fossil fuels to burn, the world can’t function. Yet every ounce of carbon dioxide in the sky affects our planet; we can see it for ourselves as extreme weather events become more and more common, as storms get more severe, as it snows less and less... The list goes on. Climate change affects the environment, animals, and us humans.
            <br/>
            <br/>
            So, how do we prevent it?
            It starts with you, the typical homeowner. Instead of fossil fuels, we can convert to renewable energy sources, such as solar power. Every big thing starts with a small thing--and you can be that. Switching to green energy can be a fantastic, cost-effective option for your home. So, why not switch?
            <br/>
            <br/>
            GRECO’s mission is to make renewable energy more accessible to typical homeowners by educating them about various green solutions. Only through education can there be change.
            </p>
        </motion.div>
    );
};
