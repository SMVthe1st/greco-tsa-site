"use client"

import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from "@material-tailwind/react";
import { TbBrandNextjs, TbBrandTailwind, TbBrandOpenai, TbApi } from "react-icons/tb";

export default function About () {
    return (
      <main> 
          <div>
            <Image priority={true} className="h-screen object-cover w-2/4 border-green-100 border-l-8 border-b-8 opacity-50" src="/heros/about.png" height={1080} width={1920} alt=""/>
            <div className="h-screen object-cover w-2/4 bg-green-200 absolute left-0 top-28 -z-10"></div>
            <Image className="h-full object-cover object-left absolute top-28 right-0 w-2/4 h-screen -z-50" src="/circlez.svg" width="546" height="832" alt=""/>
            <Title title="ABOUT"/> 
          </div> 
          <div className="overflow-hidden">
            <h1 className="mt-10 h1">About GRECO</h1>  
            <p className="py-8 px-0 mx-14">
              Green energy is energy that can be produced without harming the natural environment. It is generated using natural, renewable resources, such as sunlight. Focused on affordable, accessible, green home energy solutions, GRECO is a well-established, reliable source of information for all your energy decisions, excited to be part of the green revolution.
              <br/>
              <br/>
              GRECO has recently partnered with Hugging Face to create <Link href="/gaia" key="1" className="text-green-50">GAIA</Link>, here to help you with anything you need during your switch to clean, green energy.
            </p>  
              <div className="bg-green-200 p-14 relative mt-8">
                <blockquote className="tracking-wide text-center text-lg font-bold italic">"The greatest threat to our planet is the belief that someone else will save it."</blockquote>
                <span className="font-medium italic absolute bottom-8 right-32">- Robert Swan</span>
              </div>
            <div className="lg:flex flex-row gap-8 justify-end">
              <div className="block lg:w-2/4 p-14 ml-4">
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
                      <h2><Link className="text-green-50" href="https://nextjs.org/">Next.js</Link> is a React framework used to create quick-loading, server-rendered websites.</h2>
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
                      <h2><Link className="text-green-50" href="https://tailwindcss.com/">Tailwind</Link> is an amazing utility-first CSS framework allowing you to style rapidly and efficiently.</h2>
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
                      <h2>This website has a chatbot! GAIA was made using machine learning, possible through <Link className="text-green-50" href="https://inworld.ai/">Inworld AI</Link>, built off <Link className="text-green-50" href="https://openai.com/">OpenAI</Link>.</h2>
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
                      <h2><Link className="text-green-50" href="https://www.homedepot.com/">Home Depot</Link> and <Link className="text-green-50" href="https://newsapi.org/">News API</Link> were used for the products and news page, respectively.</h2>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </div>
              <hr className="relative lg:hidden mx-14 -mb-4 border-green-50"></hr> 
              <div className="p-14 px-4 flex flex-col w-full lg:w-2/4">
                <div dir="lg:rtl">
                  <h1 className="right-8 mt-10 h1 w-fit">About this Site</h1>  
                </div>
                <p className="py-8 px-4 lg:text-right border-green-50 border-b-2">
                  Using the latest frameworks and state-of-the-art technologies, including the implementation of AI, this highly responsive website demonstrates exemplary design skills and methodologies throughout. Enjoy!
                  <br/>
                  <br/>
                  <span className="italic">
                    Created by Shriya Vasudevan from Panther Creek HS, NC 
                    <br/>
                    TSA 2024
                  </span>
                </p>  
              </div>
            </div>
          </div>
      </main>
    );
  }
  