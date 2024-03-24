"use client"

import { Spinner } from "@material-tailwind/react";

export default function Loading () {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <Spinner className="w-14 h-14"/>        
        </div>
    );
  }