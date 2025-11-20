import React from 'react'
import Image from 'next/image'
import Link from 'next/link'    
import { x,instagram,linkedin,youtube } from '@/app/page'

const LandingFooter = () => {
  return (
    <footer className="p-8 border-t text-white border-border text-sm">
          <p className="px-5"><Image
                  className="dark:invert"
                  src="/rayani.jpg"
                  alt="Next.js logo"
                  width={90}
                  height={80}
                  priority
                /></p>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-8 text-sm text-zinc-300 gap-10 lg:grid-cols-4">
            <div className=" px-5">
              <p className="font-MontserratAl relative md:-top-1 font-medium">Helping you master the art of trade discipline</p>
              <div className="flex mt-2 fill-core gap-5">
                  {instagram}
                  {youtube}
                  {linkedin}
                  {x}
              </div>
            </div>
            <div className="font-MontserratAl px-5">
              <p className="font-bold tracking-tight text-sm text-white">Coporate</p>
              <div className="flex mt-6 flex-col gap-4">
                <Link href={'/about'}><p className="">About us</p></Link>
                <p className="">Terms and Conditions</p>
                <p className="">Privacy policy</p>
                <p className="">Refunds and Cancellation</p>
              </div>
            </div>
            <div className="font-MontserratAl px-5">
              <p className="font-bold tracking-tight text-sm text-white">Resources</p>
              <div className="flex mt-6 flex-col gap-4">
                <p className="">Blog</p>
              
              </div>
            </div>
            <div className="font-MontserratAl px-5">
              <p className="font-bold tracking-tight text-sm text-white">Support</p>
              <div className="flex mt-6 flex-col gap-4">
                <p className="">Contact</p>
                <p className="">Live chat</p>
              
              </div>
            </div>
          </div>
          <div className="pb-8 pt-16 px-5 font-semibold">
            <p className="text-base font-MontserratAl">Copyright © Rayani - {new Date().getFullYear()}</p>
          </div>
        </footer>
  )
}

export default LandingFooter
