"use client"

import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
import { lato } from "@/app/ui/fonts";
import { FaAngleDown } from "react-icons/fa";

export default function Acc () {        
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    
    return (
        <Accordion className="bg-green-200 p-8" placeholder="" open={open === 1} icon={ <FaAngleDown className={`${open ? "rotate-180" : ""} h-7 w-7 transition-transform`}/>}>
            <AccordionHeader className="text-base text-white-50 border-none hover:text-white-50 font-bold" placeholder="" onClick={() => handleOpen(1)}>
                <p>For green energy improvements installed beginning Jan 1st, 2023, you may qualify for a tax credit worth up to $3,200!</p> 
            </AccordionHeader>
            <AccordionBody className="p-8 text-white-50">
                <div className={lato.className}>
                    <p className="font-bold">This credit equals 30% of certain qualified expenses, including:</p>
                    <br/>
                    <ul className="list-disc ml-20 font-bold">
                        <li>Qualified energy-efficiency improvements installed during the year</li>
                        <li>Residential energy property expenses</li>
                        <li>Home energy audits</li>
                    </ul>
                    <br/>
                    <p className="font-bold">The maximum credit you can claim each year is:</p>
                    <br/>
                    <ul className="list-disc ml-20 font-bold">
                        <li>1,200 for energy property costs and home improvements, with limits on doors ($250 per door; $500 total), windows ($600) and home energy audits ($150)</li>
                        <li>$2,000 per year for qualified heat pumps, biomass stoves or biomass boilers</li>
                    </ul>
                    <br/>
                    <p className="font-bold">This credit can be claimed annually. There is no lifetime dollar limit, meaning you can claim the maximum amount until 2033.</p>
                </div>
            </AccordionBody>
        </Accordion>
    );
};