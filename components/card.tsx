"use client"

import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { motion } from "framer-motion"

export default function NewsCard ({ url, image, title, published, description } : { url: string, image: string, title: string, published: string, description: string }) {
    return (
        <>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.03 }} transition={{ type: "spring",  duration: 0.5 }} >
                <a href={url}>
                    <Card placeholder="" className="h-96 m-6">
                        <CardHeader 
                            placeholder=""
                            className="absolute inset-0 m-0 h-full w-full bg-cover bg-center rounded-lg"
                            style={{ backgroundImage : `url(${image})` }}
                        >
                            <div className="to-bg-black-50 absolute inset-0 h-full w-full bg-gradient-to-t from-black-50/100 via-black-50/50"></div>
                        </CardHeader>
                        <CardBody placeholder="" className="w-80 md:w-full md:-ml-2 relative top-32 md:top-52 md:px-4">
                            <h1 className="text-lg font-medium text-white-50">{title}</h1>
                            <p className="text-base text-green-50">{published}</p>
                            <p className="line-clamp-2 text-white-50">{description}</p>
                        </CardBody>
                    </Card>
                </a>
            </motion.div>
        </>
    );
};
