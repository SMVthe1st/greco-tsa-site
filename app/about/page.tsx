"use client"

import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from "@material-tailwind/react";
import { TbBrandNextjs, TbBrandTailwind, TbBrandOpenai } from "react-icons/tb";

export default function About () {
    return (
      <main> 
          <div>
            <Image priority={true} className="h-screen object-cover w-2/4 border-green-100 border-l-8 border-b-8 opacity-50" src="/heros/about.png" height={1080} width={1920} alt=""/>
            <div className="h-screen object-cover w-2/4 bg-green-200 absolute left-0 top-28 -z-10"></div>
            <Image className="h-full object-cover object-left absolute top-28 right-0 w-2/4 h-screen -z-50" src="/circlez.svg" width="546" height="832" alt=""/>
            {/* <div className="hidden 2xl:block bg-transparent w-2/4 h-1/4 absolute right-14 bottom-14 border-green-50 border-r-2 border-b-2"></div> */}       
            <Title title="ABOUT"/> 
          </div> 
          <div className="overflow-hidden">
            <h1 className="mt-10 pl-8 h1">About GRECO</h1>  
            <p className="py-8 px-6 mx-14">
              Green energy is energy that can be produced without harming the natural environment. It is generated using natural, renewable resources, such as sunlight. Focused on affordable, accessible, green home energy solutions, GRECO is a well-established, reliable source of information for all your energy decisions, excited to be part of the green revolution.
              <br/>
              <br/>
              GRECO has recently partnered with Hugging Face to create <Link href="/gaia" key="1" className="text-green-50">GAIA</Link>, here to help you with anything you need during your switch to clean, green energy.
            </p>  
              <div className="bg-green-200 p-14 relative mt-8">
                <blockquote className="tracking-wide text-center text-lg font-bold italic">"The greatest threat to our planet is the belief that someone else will save it."</blockquote>
                <span className="font-medium italic absolute bottom-8 right-32">- Robert Swan</span>
              </div>
            <div className="flex flex-row gap-8 justify-end">
              <div className="hidden lg:block w-2/4 p-14 ml-4">
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
                    <TimelineHeader>
                      <TimelineIcon className="p-4 bg-green-200">
                        <svg className="fill-white-50 w-10 h-10" version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="271.000000pt" viewBox="0 0 300.000000 271.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(20,271) scale(0.100000,-0.100000)"
                          fill="" stroke="none">
                          <path d="M1210 2630 c-166 -16 -338 -77 -478 -169 -261 -171 -425 -421 -478
                          -725 -25 -141 -10 -380 30 -477 6 -13 -1 -18 -33 -23 -87 -14 -148 -111 -122
                          -196 11 -36 10 -43 -10 -69 -27 -36 -35 -116 -17 -151 11 -21 12 -32 1 -63
                          -30 -86 29 -171 162 -236 179 -86 405 -136 584 -129 94 4 115 8 172 35 35 17
                          73 39 84 49 18 17 37 19 210 18 l190 0 43 -32 c77 -55 129 -67 292 -66 167 0
                          267 20 435 85 133 51 209 100 240 153 26 44 33 103 15 136 -7 12 -5 32 6 63
                          18 53 8 108 -26 145 -16 17 -18 26 -10 41 19 37 12 113 -14 152 -25 37 -78 69
                          -113 69 -19 0 -19 1 1 73 16 59 20 103 20 247 0 157 -3 185 -26 271 -139 514
                          -629 852 -1158 799z m290 -55 c231 -41 411 -135 571 -302 200 -208 297 -459
                          286 -743 -2 -69 -12 -158 -22 -199 -21 -90 -13 -111 56 -139 64 -27 84 -64 75
                          -144 -6 -49 -4 -64 12 -91 17 -28 20 -49 18 -157 -1 -110 -4 -129 -23 -155
                          -32 -45 -131 -99 -266 -144 -157 -52 -293 -74 -418 -69 -100 5 -160 25 -240
                          80 -36 24 -39 24 -235 23 l-199 -1 -43 -31 c-74 -55 -130 -68 -277 -67 -100 0
                          -152 6 -225 23 -179 44 -340 114 -396 172 -27 28 -29 37 -30 112 -1 45 -5 99
                          -9 119 -6 30 -3 47 20 89 24 47 26 56 15 96 -16 66 8 110 77 142 71 33 78 50
                          58 142 -9 41 -19 126 -22 189 -24 513 337 962 850 1055 99 18 265 18 367 0z"/>
                          <path d="M1121 2555 c-315 -69 -572 -267 -713 -550 -74 -147 -102 -274 -102
                          -450 0 -139 12 -201 44 -230 19 -17 22 -17 63 -1 81 31 126 18 229 -65 l27
                          -22 43 29 c53 35 113 39 154 9 16 -12 50 -66 80 -125 29 -58 76 -132 103 -165
                          93 -110 111 -138 128 -194 13 -45 13 -64 4 -104 -26 -114 -7 -134 139 -136 95
                          -2 101 -1 126 24 20 20 25 32 20 53 -29 130 -13 196 72 299 91 108 108 133
                          156 230 71 142 117 166 218 114 67 -35 51 -39 143 34 33 25 47 30 94 30 31 -1
                          70 -7 88 -15 30 -13 34 -13 56 8 18 17 27 42 36 92 31 188 -4 398 -97 585
                          -140 283 -406 488 -714 549 -96 20 -308 20 -397 1z m440 -53 c477 -126 787
                          -576 729 -1057 -7 -55 -14 -103 -16 -107 -3 -4 -13 1 -24 12 -56 56 -171 40
                          -244 -34 l-41 -43 -28 28 c-31 32 -80 44 -134 34 -46 -8 -113 -74 -129 -126
                          -18 -59 -88 -170 -154 -244 -34 -38 -71 -88 -82 -110 -28 -54 -35 -150 -15
                          -208 l15 -46 -55 -7 c-47 -6 -171 0 -179 9 -2 1 4 27 13 56 31 107 0 195 -117
                          326 -42 48 -79 105 -118 183 -59 120 -92 156 -150 168 -46 9 -97 -3 -132 -32
                          l-30 -26 -50 45 c-57 51 -115 71 -173 57 -21 -4 -46 -15 -56 -24 -10 -9 -20
                          -16 -23 -16 -3 0 -11 52 -18 115 -20 186 6 341 85 512 54 114 89 166 179 261
                          142 149 325 249 529 288 102 19 319 12 418 -14z"/>
                          <path d="M903 2000 c-41 -25 -63 -68 -63 -124 0 -36 6 -52 31 -81 17 -19 38
                          -35 46 -35 9 0 30 17 48 37 32 37 34 38 67 25 66 -24 78 -14 78 61 0 108 -116
                          173 -207 117z m138 -49 c20 -20 29 -39 29 -61 0 -29 -2 -31 -32 -30 -50 3 -54
                          2 -88 -26 -30 -25 -31 -26 -50 -9 -33 29 -27 90 11 126 42 40 90 40 130 0z"/>
                          <path d="M1605 2001 c-57 -34 -84 -99 -65 -157 13 -37 25 -41 78 -22 33 12 35
                          12 66 -25 36 -43 54 -46 83 -14 46 50 56 112 28 167 -33 63 -128 89 -190 51z
                          m128 -44 c38 -30 47 -92 19 -127 l-19 -24 -32 27 c-35 29 -38 30 -88 27 -31
                          -1 -33 1 -33 30 0 22 9 41 29 61 37 36 84 39 124 6z"/>
                          <path d="M650 1873 c-92 -35 -73 -173 24 -173 80 0 121 90 66 145 -26 25 -65
                          38 -90 28z m60 -58 c15 -19 6 -61 -16 -69 -27 -10 -53 3 -60 30 -8 30 11 54
                          41 54 12 0 28 -7 35 -15z"/>
                          <path d="M1928 1864 c-54 -29 -63 -85 -22 -133 20 -25 34 -31 64 -31 30 0 44
                          6 64 31 42 49 32 105 -24 134 -36 18 -47 18 -82 -1z m70 -46 c25 -25 8 -78
                          -25 -78 -15 0 -53 35 -53 49 0 16 30 41 49 41 9 0 22 -5 29 -12z"/>
                          <path d="M970 1555 c-16 -20 -6 -97 22 -173 30 -79 123 -172 201 -201 77 -28
                          186 -28 261 0 112 41 202 158 226 291 11 57 2 98 -20 98 -5 0 -44 -16 -87 -36
                          -124 -57 -181 -74 -249 -74 -70 0 -118 14 -245 71 -48 22 -89 39 -92 39 -2 0
                          -10 -7 -17 -15z -65 249 -66 98 -1 147 12 250 64 22 11
                          46 20 55 20 36 0 2 -127 -51 -188 l-31 -36 -41 35 c-23 20 -57 40 -77 46 -31
                          10 -39 8 -69 -12 -34 -23 -36 -23 -58 -6 -41 31 -58 33 -102 7 -22 -13 -52
                          -22 -75 -28 -174 -27 -248 0 -30 11 -62 21 -72 22 -45 4 75 117 124 117 11 0
                          27 -15 39 -35z"/>
                          <path d="M463 1309 c-11 -4 -30 -20 -43 -36 -27 -35 -22 -85 15 -143 l25 -39
                          -76 39 c-90 48 -116 50 -155 11 -41 -41 -39 -80 6 -130 19 -21 35 -41 35 -45
                          0 -3 -13 -6 -29 -6 -21 0 -37 -9 -56 -32 -29 -35 -28 -62 6 -109 24 -34 24
                          -35 -1 -61 -80 -86 110 -210 412 -269 123 -24 293 -25 367 -3 100 29 185 142
                          185 244 0 67 -22 112 -93 193 -70 80 -107 136 -146 221 -35 77 -81 126 -119
                          126 -31 0 -75 -49 -90 -100 l-13 -43 -29 39 c-49 66 -129 141 -156 146 -13 2
                          -34 1 -45 -3z m74 -55 c27 -17 107 -129 171 -238 54 -92 81 -114 117 -98 37
                          17 31 47 -20 96 -25 24 -49 56 -55 71 -24 63 1 145 44 145 31 0 44 -18 99
                          -130 31 -63 73 -126 126 -189 92 -109 112 -156 91 -224 -19 -66 -64 -122 -117
                          -149 -43 -21 -62 -23 -183 -23 -147 0 -226 12 -362 56 -169 55 -261 117 -237
                          160 16 31 60 23 168 -33 93 -47 103 -50 118 -35 9 8 13 23 9 32 -6 16 -25 26
                          -170 86 -102 41 -142 75 -132 112 13 54 86 32 281 -82 81 -47 95 -50 95 -17 0
                          31 -46 71 -157 137 -177 104 -205 130 -184 175 7 17 19 24 37 24 38 0 134 -57
                          233 -137 116 -94 148 -116 160 -108 23 14 8 39 -81 133 -114 121 -148 167
                          -148 203 0 56 40 69 97 33z"/>
                          <path d="M2129 1310 c-44 -12 -73 -37 -128 -110 -29 -38 -55 -70 -57 -70 -2 0
                          -8 19 -14 42 -14 49 -59 98 -92 98 -39 0 -75 -41 -129 -148 -30 -59 -76 -131
                          -110 -170 -85 -98 -112 -146 -117 -208 -9 -104 81 -226 189 -258 151 -45 458
                          1 664 99 120 57 158 117 110 173 l-27 32 26 31 c15 18 26 43 26 60 0 34 -39
                          79 -68 79 -32 0 -32 10 4 57 42 55 43 85 5 124 -39 38 -65 37 -155 -10 -42
                          -22 -76 -37 -76 -34 0 3 10 19 22 35 31 44 36 116 9 149 -24 31 -46 38 -82 29z
                          m57 -55 c27 -41 4 -85 -107 -201 -116 -123 -137 -150 -121 -166 16 -16 45 0
                          122 67 107 94 236 175 278 175 24 0 42 -19 42 -45 0 -31 -52 -75 -177 -150
                          -98 -58 -173 -117 -173 -134 0 -3 5 -13 10 -21 8 -13 14 -13 42 4 183 105 232
                          129 272 133 38 5 46 2 56 -17 20 -37 -14 -69 -116 -112 -135 -57 -179 -81
                          -182 -102 -8 -42 16 -40 126 13 124 60 165 65 170 19 4 -36 -51 -76 -162 -119
                          -263 -102 -557 -119 -660 -38 -43 34 -86 117 -86 167 0 54 19 91 84 167 75 87
                          95 117 151 229 47 94 52 101 80 101 25 0 33 -7 48 -37 28 -56 15 -100 -49
                          -170 -30 -32 -54 -62 -54 -68 0 -5 11 -17 24 -25 40 -27 65 -7 133 106 78 130
                          129 197 172 226 43 29 57 29 77 -2z"/>
                          </g>
                        </svg>
                      </TimelineIcon>
                      <h1 className="text-lg font-bold">Hugging Face</h1>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <h2>This website has a chatbot! GAIA was made using machine learning, possible through <Link className="text-green-50" href="https://huggingface.co/">Hugging Face</Link>.</h2>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </div>
              <div className="p-14 flex flex-col w-full lg:w-2/4">
                <div dir="rtl">
                  <h1 className="right-8 mt-10 pr-8 h1 w-fit">About this Site</h1>  
                </div>
                <p className="py-8 px-4 text-right border-green-50 border-b-2">
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
  