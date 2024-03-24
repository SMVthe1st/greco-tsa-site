import { NAV_LINKS } from "@/scripts/constants";
import Link from "next/link";
import Image from "next/image";

export default function Footer () {
    return(
        <footer className="inline-block w-screen">
            <div className="p-4 px-14 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-green-200 text-center md:justify-between">
                <Link href="/" key="1">
                    <Image src="/logo.svg" width="110" height="37" alt=""/>
                </Link>                
                <div>                  
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        {NAV_LINKS.map((a) => (
                            <li key={a.label}>
                                <Link key={a.label} href={a.href}>
                                    {a.label}
                                </Link>
                            </li>
                        ))}                        
                    </ul>
                </div>
                <hr className="my-8 border-white-50" />
                <p className="w-full text-center 2xl:w-fit text-left">© 2024 Shriya M. Vasudevan, PCHS TSA. All rights reserved.</p>
            </div>
        </footer>
    );
};
