"use client"

import Title from "@/components/title";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DetailsContent () {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
                <Image priority={true} className="h-screen object-cover opacity-50" src="/heros/details.jpg" height={1080} width={1920} alt=""/>
                <div className="h-screen object-cover w-screen bg-green-200 absolute left-0 top-28 -z-10"></div>
                <Title title="DETAILS"></Title>
            </motion.div>  
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <h2 className="h2 pt-10 mx-14">There are many types of green solutions.</h2>
                <p className="py-8 mx-14">There are 5 main types of green energy for you to explore for your home: solar, wind, geothermal, hydroelectric, and biomass. Information on each has been compiled below to aid in your decision as to what may be right for you.</p>
            </motion.div>
        </>
    );
};