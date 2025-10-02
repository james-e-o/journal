'use client'
import React , {useState,useEffect}from 'react'
import Link from 'next/link'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button'
import Image from "next/image";

const LandingHeader = () => {
     
  
  useEffect(()=>{
          document.onpointerdown = ({target}) => {
               if(dropState&&target.closest('div#drop-box'))return
               else if(dropState) {
               setDropState(!dropState)
               }
          }
          const wrap = document.getElementById("landing-wrap");
          const header = document.getElementById("landing-header");
          const trigger = document.getElementById("landing-main");
          const obstinateButtons = document.querySelectorAll('.obstinate');

          console.log(header,trigger)

          wrap.addEventListener("scroll", (e) => {
               const rect = trigger.getBoundingClientRect();
               // console.log(' scrolling',rect.top)

               if (rect.top <= 0) {
               header.classList.add("activeItem");
               obstinateButtons.forEach(btn=>{
                    btn.classList.add('textblack')      
                    btn.classList.remove('textwhite')
               })
               } else {
               header.classList.remove("activeItem");
               obstinateButtons.forEach(btn=>{
                    btn.classList.remove('textblack')      
                    btn.classList.add('textwhite')
               })
               }
          });
  
     })


     return (
     <header id="landing-header" className={`flex md:mt-7 font-serif  justify-between md:border transition-all top-0 duration-200  border-zinc-700 w-full mx-auto md:w-[65%] py-2 px-4 md:px-[1.8rem] md:py-1.5 z-[1000] md:rounded-[48px] md:bg-white/5 items-center `}>
          <div>
               <Image
               className="dark:invert scale-90 relative top-1.5  md:scale-x-[112%]"
               src="/rayani3.png"
               alt="Next.js logo"
               width={50}
               height={50}
               priority
               />
          </div>
          <p className="flex font-Cinzel relative top-1 gap-1 md:gap-2.5">
               <Link href={'/about'}><Button variant={'ghost'} className={`obstinate text-white cursor-pointer text-sm hover:bg-transparent hover:-translate-y-0.5  hover:text-amber-200 font-bold`}>About us</Button></Link>
               {/* <Button variant={'ghost'} className={'text-white cursor-pointer text-base hover:bg-transparent hover:-translate-y-0.5 hover:text-amber-200 font-semibold'}>Blogs</Button> */}
               <Link href={'/plans'}><Button variant={`ghost`} className={`obstinate text-white cursor-pointer text-sm hover:bg-transparent hover:-translate-y-0.5  hover:text-amber-200 font-bold`}>Plans</Button></Link>
          </p>
          <nav className=" relative top-1 md:top-0 gap-10">
               <Button variant={'destructive'} className={'bg-white text-black  rounded-3xl h-8 md:h-9 font-bold font-Cinzel tracking-tighter border-2 border-zinc-400'}>Sign in</Button>
          </nav>
     </header>
     )
}

export default LandingHeader


export const menuX = <svg data-name="Layer 1" className="w-5 h-5" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>

