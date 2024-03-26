"use client"

import { Rating } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Prod ({ link, image, product, price, value }: { link: string, image: string, product: string, price: string, value: number}) {
    return (
        <>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.03 }} transition={{ type: "spring",  duration: 0.5 }} >
                <div className="h-96 mx-6 mb-20 md:mb-10 relative">
                    <a href={link}>
                        <img className="mb-4 rounded-lg" src={image} width="400" height="400" alt="" />
                        <p className="line-clamp-2">{product}</p>
                        <p className="font-bold">{price}</p>
                    </a>            
                    <Rating className="px-4 py-2" ratedIcon={<FaStar className="text-green-100 w-4 h-4"/>} unratedIcon={<FaStar className="text-white-50/50 w-4 h-4"/>} placeholder="" value={value} readonly/>
                </div>
            </motion.div>
        </>
    );
};
