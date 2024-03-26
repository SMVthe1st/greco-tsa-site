"use client"

import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from "@material-tailwind/react";
import { TbBrandNextjs, TbBrandTailwind, TbBrandOpenai, TbBrandFramer, TbApi } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Credits () {
    return (
        <div className="lg:flex flex-row gap-8 justify-end">
            <motion.div className="block lg:w-2/4 p-14 lg:ml-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <Timeline>
                    <TimelineItem>
                        <TimelineConnector/>
                        <TimelineHeader>
                            <TimelineIcon className="p-4 bg-green-200">
                                <TbBrandNextjs className="text-white-50 w-10 h-10"/>
                            </TimelineIcon>
                            <h1 className="text-lg font-bold">Next.js</h1>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <h2><Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://nextjs.org/">Next.js</Link> is a React framework used to create quick-loading, server-rendered websites.</h2>
                        </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineConnector/>
                        <TimelineHeader>
                            <TimelineIcon className="p-4 bg-green-200">
                                <TbBrandTailwind className="text-white-50 w-10 h-10"/>
                            </TimelineIcon>
                            <h1 className="text-lg font-bold">Tailwind</h1>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <h2><Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://tailwindcss.com/">Tailwind</Link> is an amazing utility-first CSS framework allowing you to style rapidly and efficiently.</h2>
                        </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineConnector/>
                        <TimelineHeader>
                            <TimelineIcon className="p-4 bg-green-200">
                                <TbBrandFramer className="text-white-50 w-10 h-10"/>
                            </TimelineIcon>
                            <h1 className="text-lg font-bold">Framer Motion</h1>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <h2><Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://www.framer.com/motion/">Framer Motion</Link> is a simple and powerful motion library for React.</h2>
                        </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineConnector/>
                        <TimelineHeader>
                            <TimelineIcon className="p-4 bg-green-200">
                                <TbBrandOpenai className="text-white-50 w-10 h-10"/>
                            </TimelineIcon>
                            <h1 className="text-lg font-bold">OpenAI</h1>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <h2>This website has a chatbot! GAIA was made using machine learning, possible through <Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://inworld.ai/">Inworld AI</Link>, built off <Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://openai.com/">OpenAI</Link>.</h2>
                        </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineHeader>
                            <TimelineIcon className="p-4 bg-green-200">
                                <TbApi className="text-white-50 w-10 h-10"/>
                            </TimelineIcon>
                            <h1 className="text-lg font-bold">API</h1>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <h2><Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://www.homedepot.com/">Home Depot</Link> and <Link className="text-green-50 hover:text-green-150 transition ease delay-50" href="https://newsapi.org/">News API</Link> were used for the products and news page, respectively.</h2>
                        </TimelineBody>
                    </TimelineItem>
                </Timeline>
            </motion.div>
            <motion.div className="p-14 px-4 flex flex-col w-full lg:w-2/4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <h1 className="right-8 mt-10 h1 lg:text-right">About this Site</h1>  
                <p className="py-8 px-4 lg:text-right border-green-50 border-b-2">
                    Using the latest frameworks and state-of-the-art technologies, including the implementation of AI, this highly responsive website demonstrates exemplary design skills and methodologies throughout. Enjoy!
                    <br/>
                    <br/>
                    <span className="italic">
                    Created by S. M. V. from Panther Creek HS, NC 
                    <br/>
                    TSA 2024
                    </span>
                </p>  
            </motion.div>
        </div>
    );
};
