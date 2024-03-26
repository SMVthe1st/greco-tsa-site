"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { SOURCE_LINKS } from "@/scripts/constants";

export default function Sources () {
    return (
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <hr className="md:hidden relative mt-4 m-14 border-green-50"></hr>   
            <h2 className="h2 p-4 text-center mb-14 md:-mt-24">Created with the help of several trustworthy sources</h2>
            <div className="relative grid grid-flow-row auto-rows-max md:grid-cols-4 lg:grid-cols-9 place-content-center justify-center overflow-hidden pt-2 p-8 gap-8 text-center">
            {SOURCE_LINKS.map((a) => (
                <Link key={a.label} href={a.href} className="">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                        {a.label}  
                    </motion.div>                     
                </Link>
            ))}
            </div>
      </motion.div> 
    );
}
