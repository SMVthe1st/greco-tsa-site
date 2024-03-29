"use client"

import { useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Talk from "@/scripts/gaia";
import { motion } from "framer-motion";

export default function GAIA () {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([""]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e: any, message: any) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    setChats(chats);
    setMessage("");

    chats.push(await Talk(message));
    setChats(chats);
    setIsTyping(false);

    return await Talk(message);
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} className="bg-gradient-to-tr from-green-200/40 to-green-100/60 min-w-screen min-h-screen shadow-inner">
      <div className="flex justify-center p-10">
        <Image className="" src="/gaia.svg" width="160" height="171" alt=""/>
      </div>
      <div className="hidden lg:flex absolute top-36 flex-row p-12 w-screen ml-0 gap-64 h-screen">
        <div className="items-center bg-transparent border-green-50 border-l-2 border-t-2 h-5/6 w-2/4 p-0"></div>
        <div className="items-center bg-transparent border-green-50 border-r-2 border-t-2 h-5/6 w-2/4 p-0"></div>
      </div>
      <h2 className="relative px-4 text-lg font-bold text-center m-0">Hi there, I&apos;m<span> </span>
        <span className="text-green-50 cursor-pointer">
          <Tooltip className="bg-black-50 text-white-50 p-8 w-96 text-center" content="Geo Artificial Intelligence Assistant (GAIA) is an AI model built to help homeowners find economic green energy solutions. However, GAIA can also be used for... More fun purposes!" placement="top">
            GAIA
          </Tooltip>
        </span>. What can I help you with today?
      </h2>
      <div className={isTyping ? "flex flex-row justify-center w-full gap-8 py-10" : "py-10 pr-0 md:pr-12 flex justify-center items-center w-full"}>
        {isTyping ? (
          <>
            <div className="animate-ping h-3 w-3 rounded-full bg-green-50"></div>
            <div className="animate-ping h-3 w-3 rounded-full bg-green-50"></div>
            <div className="animate-ping h-3 w-3 rounded-full bg-green-50"></div>
          </>
        ) : <p className="text-center w-10/12">{chats[chats.length - 1]}</p>}
      </div>
      <div className="relative flex flex-col gap-8 items-center px-4 pb-10 w-screen">      
        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} className="bg-white-50/20 p-4 rounded-full w-80 md:w-96 text-base text-white-50" onClick={(e) => chat(e, "Cheap green energy options for homeowners")}>Cheap green energy options for homeowners</motion.button>
        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} className="bg-white-50/20 p-4 rounded-full w-80 md:w-96 text-base text-white-50" onClick={(e) => chat(e, "Tell me a random joke!")}>Tell me a random joke!</motion.button>
      </div>
      <div className="flex flex-cols justify-center pt-10 px-4 h-48">
        <form className="relative flex text-center min-w-80 md:min-w-96 w-2/4" action="" onSubmit={(e) => chat(e, message)}>
          <motion.input whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }} className="focus:outline-black-50/50 w-full h-16 placeholder-green-50 rounded-lg p-8 bg-black-50/20 border-green-50 border-2 text-green-50" value={message} placeholder="Send a message" onChange={(e) => setMessage(e.target.value)}/>
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} disabled={!message} className="!absolute right-0 top-0 p-6 rounded-lg bg-transparent" onClick={(e) => chat(e, message)}>
            <FaArrowRight className={message ? "text-green-50 text-lg transition ease delay-50" : "text-green-50/40 text-lg transition ease delay-50"}/>
          </motion.button>
        </form>
      </div>
    </motion.main>
  );
}
