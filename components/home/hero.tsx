"use client"

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"

export default function HomeHero () {
    return (
        <motion.div className="h-screen w-full" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
            <h1 className="stroke-text opacity-30 lg:opacity-100 tracking-widest absolute top-28 -left-20 md:-left-36">GRECO</h1>
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }}>
                <div className="md:px-4 py-0 lg:w-2/4 flex flex-col text-left mt-10 mx-6 lg:ml-0">
                    <h1 className="relative text-5xl lg:text-8xl tracking-widest font-extrabold p-4" style={{ letterSpacing : 25 }}>GRECO</h1>
                    <h2 className="h2 p-4">Green Renewable Energy Consolidation Operation</h2>
                    <p className="p-4 pb-4">The latest and greatest clean energy initiative, here to help homeowners like you find the most efficient and cost-effective solutions keeping our planet, and your pocket, healthy.</p>
                    <motion.div className="text-center mt-6 h1 !ml-8 md:!ml-14 !text-lg relative bg-green-200 rounded-lg p-4 w-60" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href="/about">
                            EXPLORE
                            <FaArrowRight className="inline-flex text-white ml-10" />
                        </Link>                
                    </motion.div>
                </div>
            </motion.div>           
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
        </motion.div>  
    );
};