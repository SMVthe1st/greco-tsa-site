"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutContent () {
    return (
        <>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <h1 className="mt-10 h1">About GRECO</h1>  
                <p className="py-8 px-0 mx-14">
                Green energy is energy that can be produced without harming the natural environment. It is generated using natural, renewable resources, such as sunlight. Focused on affordable, accessible, green home energy solutions, GRECO is a well-established, reliable source of information for all your energy decisions, excited to be part of the green revolution.
                <br/>
                <br/>
                GRECO has recently partnered with OpenAI to create <Link href="/gaia" key="1" className="text-green-50 hover:text-green-150 transition ease delay-50">GAIA</Link>, here to help you with anything you need during your switch to clean, green energy.
                </p>  
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <div className="bg-green-200 p-14 relative mt-8">
                    <blockquote className="tracking-wide text-center text-lg font-bold italic">"The greatest threat to our planet is the belief that someone else will save it."</blockquote>
                    <span className="font-medium italic absolute bottom-8 right-32">- Robert Swan</span>
                </div>
            </motion.div>
        </>
    );
};