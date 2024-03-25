"use client"

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/scripts/constants";
import { CheckPath } from "@/scripts/check-path";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Nav () {
    const [open, setOpen] = useState(false);
    
    const openNav = () => setOpen(true);
    const closeNav = () => setOpen(false);
     
    const navList = (
        NAV_LINKS.map((a) => (
            <Link scroll={false} key={a.label} href={a.href} className={ CheckPath(a.href) ? "underline underline-offset-8 decoration-green-50 font-semibold block" : "block"}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    {a.label}  
                </motion.div>          
            </Link>
        ))
    );

    return (
        <nav className={CheckPath("/") ? "relative min-w-screen" : "min-w-screen relative bg-black-50 h-28 shadow-[0_0_8px_16px_rgba(0,0,0,0.3)]"}>
            <div className="ml-14 pl-0 p-8 py-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Link className="flex items-center space-x-3" href="/" key="1">
                    <Image src="/logo.svg" width="127" height="43" alt=""/>
                </Link>
                <motion.button whileTap={{ scale: 0.8 }} onClick={openNav} data-collapse-toggle="navbar-default" type="button" className="z-50 inline-flex items-center p-2 w-20 h-20 justify-center lg:hidden" aria-controls="navbar-default" aria-expanded="false">
                    {open ? (
                        <FaTimes className="w-4 h-4"/>
                    ) : (
                        <FaBars className="w-4 h-4"/>
                    )}
                </motion.button>
                <div className="hidden w-full lg:block lg:w-auto px-8">
                    <ul className="text-white-50 font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-14 md:mt-0">
                        {navList}
                    </ul>
                </div>
            </div>
            <Drawer placement="right" className="z-10 lg:hidden h-screen bg-black-50" overlay={false} placeholder="" open={open} onClose={closeNav}>
                <div className="p-14 flex flex-col items-center justify-center gap-8">
                    {navList}
                </div>
            </Drawer>
        </nav>
    );
};
