"use client"

import { Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { CARD_CONTENT } from "@/scripts/constants";

export default function HomeCard () {
    return (
        <div className="mt-8 relative mx-0 gap-20 md:flex flex-wrap w-full items-center justify-center">
            {CARD_CONTENT.map((b) => (
                <Link key="1" href={b.link}>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.03 }} transition={{ duration: 0.3, type: "spring" }}>
                    <Card placeholder="" className="mt-6 w-full md:w-96">
                        <CardBody className="inline-flex flex-col gap-8 text-center items-center justify-center" placeholder="" >
                        <div dangerouslySetInnerHTML={{ __html: b.svg}}></div>
                        <h2 className="tracking-widest text-center font-bold text-lg text-green-50">{b.title}</h2>
                        <p className="text-white-50">{b.content}</p>            
                        <FaArrowRight className="text-green-50 text-lg"/>
                        </CardBody>
                    </Card>
                    </motion.div>
                </Link>
            ))}
      </div>
    );
};