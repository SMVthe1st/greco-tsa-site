"use client"

import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Down () {
    return (
        <div className="flex items-center justify-center w-full h-20 absolute bottom-20">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={() => document.body?.scrollTo({ top: document.body.clientHeight, behavior: "smooth" })} className="h-16 w-16 md:h-24 md:w-24">
                <FaChevronDown className="text-white-50 h-16 w-16 md:w-24 md:h-24"/>
            </motion.button>
        </div>
    );
};