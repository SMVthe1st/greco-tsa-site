"use client"

import "dotenv/config";
import { useState } from "react";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_API_KEY);

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

    await hf.textGeneration({
      model: "HuggingFaceH4/zephyr-7b-beta",
      inputs: message
    })      
    .then((output) => {
      chats.push(output.generated_text);
      setChats(chats);
      setIsTyping(false);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  };

  return (
    <main>
      <h2>TEST Hi there, I'm <span>GAIA</span>. What can I help you with today?</h2>
      <section>        
        {chats.map((i) => <p>{i}</p>)}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

      <form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Send a message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

