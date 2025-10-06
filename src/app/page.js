"use client"
import { useState,useEffect } from "react";
import { Button,buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import Link from "next/link";
import { X,XIcon } from "lucide-react";
import FeatureScroller from "@/components/scroller";
import { Avatar } from "@/components/ui/avatar";
import {  Accordion,  AccordionContent,  AccordionItem,  AccordionTrigger,} from "@/components/ui/accordion"
import LandingHeader from "@/components/hero-header";
import LandingFooter from "@/components/landing-foot";

export default function Home() {
 
  return (
    <div id="landing-wrap" onScroll={(e)=>{dropState?setDropState(false):''}} className="font-sans w-full relative z-0 overflow-x-hidden no_scroll h-svh overflow-y-scroll ">
      <div className="min-h-svh relative flex z-0 flex-col justify-start bg-black">
        <LandingHeader />
       
        <div className="flex p-5 items-center relative flex-col h-[92svh] gap-0 justify-center">
          <div className="bg-yellow-500 blur-[100px] scale-125 before:w-full before:h-full before:bg-transparent before:absolute before:blur-3xl top-2/5 right-2/12 w-52 h-44 absolute"></div>
          <p className="text-[#f1f1f1] font-sans font-bold text-start sm:text-center tracking-tighter   text-5xl md:text-5xl lg:text-7xl">Journal your Trades</p>
          <p className="text-[#a9a9a9] font-sans font-bold text-start sm:text-center tracking-tighter   mt-3 text-5xl md:text-5xl lg:text-7xl">Track Your Growth Journey</p>
          <div className="rounded-4xl bg-white mt-36 border-2 border-zinc-400">
            {/* <input placeholder="Enter your email address" className={'w-56 sm:w-72 py-4 px-8 border-none outline-0'} /> */}
            <Link className="cursor-pointer" href={'/plans'}><Button className={' rounded-4xl px-11 py-3.5 -top-0.5 h-full font-semibold font-sans'}>Get started</Button></Link>
          </div>
        </div>
     
        <main id="landing-main" className="flex bg-white pb-12 flex-col">
          <div className="">
            <div className="w-[95%] font-Inter mx-auto  py-12 px-4 md:px-9">
              <p className="text-base md:text-xl flex text-start items-center my-1 font-bold"><span className="text-zinc-900  z-50   mr-2">What is in</span> 
                <Image
                className="dark:invert relative -left-5 scale-75 md:scale-[112%]"
                src="/qmark.jpg"
                alt="Next.js logo"
                width={80}
                height={110}
                priority
              />
              </p>
              <Accordion
                type="single"
                collapsible
                className="w-full flex font-MontserratAl flex-col gap-4 items-center"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1" className=" flex flex-col items-center">
                  <AccordionTrigger className={'flex font-semibold text-core text-xl items-center justify-center md:text-3xl'}>Smart Trade Logging</AccordionTrigger>
                  <AccordionContent className="flex flex-col items-center gap-4 text-balance">
                    <p className="text-lg md:text-2xl text-center leading-[1.5] md:leading-[2] md:w-4/5 w-full flex-col items-center flex">
                      Our flagship product combines cutting-edge technology with sleek
                      design. Built with premium materials, it offers unparalleled
                      performance and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className={'flex font-semibold justify-center md:text-3xl text-core text-xl items-center'}>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col items-center gap-4 text-balance">
                    <p className="text-lg md:text-2xl text-center leading-[1.5] md:leading-[2] md:w-4/5 w-full flex-col items-center flex">
                      We offer worldwide shipping through trusted courier partners.
                      Standard delivery takes 3-5 business days, while express shipping
                      ensures delivery within 1-2 business days.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3 flex flex-col items-center">
                  <AccordionTrigger className={'flex font-semibold md:text-3xl text-core text-xl items-center justify-center'}>Smart Trade Logging</AccordionTrigger>
                  <AccordionContent className="flex flex-col items-center gap-4 text-balance">
                    <p className="text-lg md:text-2xl text-center leading-[1.5] md:leading-[2] md:w-4/5 w-full flex-col items-center flex">
                      Our flagship product combines cutting-edge technology with sleek
                      design. Built with premium materials, it offers unparalleled
                      performance and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className={'flex font-semibold justify-center md:text-3xl text-core text-xl items-center'}>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col items-center gap-4 text-balance">
                    <p className="text-lg md:text-2xl text-center leading-[1.5] md:leading-[2] md:w-4/5 w-full flex-col items-center flex">
                      We offer worldwide shipping through trusted courier partners.
                      Standard delivery takes 3-5 business days, while express shipping
                      ensures delivery within 1-2 business days.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
              </Accordion>
            </div>
          </div>

          <div className="flex flex-col mt-8 md:mt-16 items-center justify-start">
            <p className="font bold tracking-tighter font-bold text-center text-3xl md:text-5xl text-zinc-800 font-sans py-3">Your trusted trading journal.</p>
            <div className="w-4/5 p-12 flex flex-col mt-6 md:mt-10 items-center gap-3 rounded-3xl bg-gradient-to-b from-core to-yellow-600">
                <p className="text-6xl font-bold font-sans tracking-tighter">60,000+</p>
                <span className="text-white relative top-3 font-semibold">Registered users</span>
            </div>
          </div>
          <div className="mt-5 md:mt-20">
            <div className=" w-[95%] mx-auto  py-12 px-4 md:px-9">
              <p className=" text-zinc-800 font-WixMade text-xl text-center md:text-start  md:text-3xl my-6 font-semibold">Trading Resources</p>
              <FeatureScroller />
            </div>
          </div>
          <div className="bg-zinc-50 mt-8 md:mt-20 py-12 px-4 md:px-9">
            <p className="text-center text-zinc-800 font-WixMade text-2xl md:text-3xl my-3 md:my-6 font-semibold">Reviews from Our Users</p>
              <Carousel className="w-[80%] mx-auto">
                <CarouselContent className="">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/3">
                      <div className="p-5 flex-col flex gap-3">
                        <Card>
                          <CardContent className="flex min-h-44 items-center justify-center p-6">
                            <CommentCard />                           
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
        
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}


const CommentCard = () => {
  return (
    <div className="flex-col font-WixMade w-full gap-5 justify-start flex ">
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <div className="md:flex tracking-tighter flex gap-2 items-center">
          <Avatar className='items-center inline-flex rounded-full w-7 h-7 justify-center'>
              <Image src='/dummy.jpg' width={50} height={50} className=" w-full " alt="@storeprobuilder"/>
              {/* <AvatarFallback>JO</AvatarFallback> */}
          </Avatar>
          <div className="flex-col justify-center leading-tight flex">
              <p className="text-xs font-bold">Staff007</p>
              <p className="text-xs font-semibold text-core_contrast/70">staffmail@xyz.store</p>
          </div>
        </div>
    </div>
  )
}






export const instagram = <svg width="24" height="24" viewBox="0 0 24 24" className="css-134acw"><path d="M8.2721 3.0627C7.3145 3.10788 6.66056 3.2607 6.08888 3.48534C5.49722 3.71592 4.99573 4.02534 4.49677 4.5261C3.99781 5.02687 3.69055 5.52871 3.46159 6.12127C3.24001 6.69421 3.08989 7.34869 3.04759 8.30684C3.00529 9.26498 2.99593 9.57296 3.00061 12.017C3.00529 14.4611 3.01609 14.7674 3.06253 15.7275C3.10825 16.685 3.26053 17.3387 3.48517 17.9106C3.71611 18.5023 4.02517 19.0036 4.52611 19.5027C5.02705 20.0018 5.52854 20.3084 6.12254 20.5377C6.69494 20.7589 7.3496 20.9098 8.30757 20.9517C9.26553 20.9936 9.57387 21.0034 12.0172 20.9987C14.4605 20.994 14.7681 20.9832 15.7281 20.9377C16.688 20.8921 17.3384 20.7388 17.9104 20.5152C18.5021 20.2837 19.0037 19.9752 19.5025 19.4741C20.0013 18.973 20.3084 18.4708 20.5372 17.8778C20.7589 17.3054 20.9096 16.6508 20.9512 15.6935C20.9931 14.7329 21.003 14.4261 20.9983 11.9825C20.9936 9.53876 20.9827 9.2324 20.9371 8.27264C20.8916 7.31287 20.7391 6.66109 20.5147 6.08887C20.2834 5.49721 19.9747 4.99627 19.4739 4.49676C18.9731 3.99726 18.4706 3.69036 17.8778 3.46212C17.3051 3.24054 16.6508 3.08952 15.6928 3.04812C14.7348 3.00672 14.4265 2.9961 11.9823 3.00078C9.53805 3.00546 9.23205 3.0159 8.2721 3.0627ZM15.8973
 7.78932C15.7783 7.61191 15.7146 7.40319 15.7142 7.18957C15.7138 6.9032 15.827 6.62836 16.0292 6.4255C16.2313 6.22263 16.5057 6.10834 16.7921 6.10777C17.0057 6.10734 17.2146 6.17028 17.3925 6.28861C17.5703 6.40694 17.7091 6.57536 17.7912 6.77256C17.8734 6.96976 17.8952 7.18689 17.8539 7.39648C17.8126 7.60608 17.7101 7.79872 17.5593 7.95005C17.4085 8.10138 17.2163 8.20459 17.0068 8.24664C16.7974 8.28869 16.5802 8.26769 16.3827 8.18629C16.1852 8.10488 16.0163 7.96674 15.8973 7.78932ZM12.0082 16.6207C9.45633 16.6256 7.38344 14.5611 7.3784 12.0087C7.37354 9.45668 9.43833 7.38343 11.9906 7.37839C14.5428 7.37335 16.6162 9.43832 16.6211 11.9907C16.6259 14.5431 14.5601 16.6158 12.0082 16.6207Z"></path><path d="M8.99949 12.0055C8.99831 11.4121 9.17312 10.8318 9.50179 10.3377C9.83047 9.84373 10.2983 9.45828 10.846 9.23013C11.3937 9.00198 11.9968 8.94137 12.579 9.05598C13.1612 9.17059 13.6963 9.45525 14.1167 9.87399C14.5371 10.2927 14.8239 10.8267 14.9408 11.4084C15.0577 11.9902 14.9995 12.5935 14.7735 13.1421C14.5475 13.6908 14.1639 14.1601 13.6712 14.4907C13.1785 14.8213 12.5989 14.9984 12.0055 14.9996C11.6115 15.0004 11.2212 14.9237 10.8569 14.7736C10.4926 14.6236 10.1614 14.4033 9.88228 14.1252C9.60314 13.8472 9.3815 13.5169 9.23003 13.1532C9.07856 12.7895 9.00022 12.3995 8.99949 12.0055Z"></path><path d="M8.2721 3.0627C7.3145 3.10788 6.66056 3.2607 6.08888 3.48534C5.49722 3.71592 4.99573 4.02534 4.49677 4.5261C3.99781 5.02687 3.69055 5.52871 3.46159 6.12127C3.24001 6.69421 3.08989 7.34869 3.04759 8.30684C3.00529 9.26498 2.99593 9.57296 3.00061 12.017C3.00529 14.4611 3.01609 14.7674 3.06253 15.7275C3.10825 16.685 3.26053 17.3387 3.48517 17.9106C3.71611 18.5023 4.02517 19.0036 4.52611 19.5027C5.02705 20.0018 5.52854 20.3084 6.12254 20.5377C6.69494 20.7589 7.3496 20.9098 8.30757 20.9517C9.26553 20.9936 9.57387 21.0034 12.0172 20.9987C14.4605 20.994 14.7681 20.9832 15.7281 20.9377C16.688 20.8921 17.3384 20.7388 17.9104 20.5152C18.5021 20.2837 19.0037 19.9752 19.5025 19.4741C20.0013 18.973 20.3084 18.4708 20.5372 17.8778C20.7589 17.3054 20.9096 16.6508 20.9512 15.6935C20.9931 14.7329 21.003 14.4261 20.9983 11.9825C20.9936 9.53876 20.9827 9.2324 20.9371 8.27264C20.8916 7.31287 20.7391 6.66109 20.5147 6.08887C20.2834 5.49721 19.9747 4.99627 19.4739 4.49676C18.9731 3.99726 18.4706 3.69036 17.8778 3.46212C17.3051 3.24054 16.6508 3.08952 15.6928 3.04812C14.7348 3.00672 14.4265 2.9961 11.9823 3.00078C9.53805 3.00546 9.23205 
 3.0159 8.2721 3.0627ZM7.3784 12.0087C7.38344 14.5611 9.45633 16.6256 12.0082 16.6207C14.5601 16.6158 16.6259 14.5431 16.6211 11.9907C16.6162 9.43832 14.5428 7.37335 11.9906 7.37839C9.43833 7.38343 7.37354 9.45668 7.3784 12.0087ZM9.50179 10.3377C9.17312 10.8318 8.99831 11.4121 8.99949 12.0055C9.00022 12.3995 9.07856 12.7895 9.23003 13.1532C9.3815 13.5169 9.60314 13.8472 9.88228 14.1252C10.1614 14.4033 10.4926 14.6236 10.8569 14.7736C11.2212 14.9237 11.6115 15.0004 12.0055 14.9996C12.5989 14.9984 13.1785 14.8213 13.6712 14.4907C14.1639 14.1601 14.5475 13.6908 14.7735 13.1421C14.9995 12.5935 15.0577 11.9902 14.9408 11.4084C14.8239 10.8267 14.5371 10.2927 14.1167 9.87399C13.6963 9.45525 13.1612 9.17059 12.579 9.05598C11.9968 8.94137 11.3937 9.00198 10.846 9.23013C10.2983 9.45828 9.83047 9.84373 9.50179 10.3377ZM15.8973 7.78932C15.7783 7.61191 15.7146 7.40319 15.7142 7.18957C15.7138 6.9032 15.827 6.62836 16.0292 6.4255C16.2313 6.22263 16.5057 6.10834 16.7921 6.10777C17.0057 6.10734 17.2146 6.17028 17.3925 6.28861C17.5703 6.40694 17.7091 6.57536 17.7912 6.77256C17.8734 6.96976 17.8952 7.18689 17.8539 7.39648C17.8126 7.60608 17.7101 7.79872 17.5593 7.95005C17.4085 8.10138 17.2163 8.20459 17.0068 8.24664C16.7974 8.28869 16.5802 8.26769 16.3827 8.18629C16.1852 8.10488 16.0163 7.96674 15.8973 7.78932Z"></path></svg>





export const youtube = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M21.8008 8.00195C21.8008 8.00195 21.6055 6.62305 21.0039 6.01758C20.2422 5.2207 19.3906 5.2168 19 5.16992C16.2031 4.9668 12.0039 4.9668 12.0039 4.9668H11.9961C11.9961 4.9668 7.79688 4.9668 5 5.16992C4.60938 5.2168 3.75781 5.2207 2.99609 6.01758C2.39453 6.62305 2.20312 8.00195 2.20312 8.00195C2.20312 8.00195 2 9.62305 2 11.2402V12.7559C2 14.373 2.19922 15.9941 2.19922 15.9941C2.19922 15.9941 2.39453 17.373 2.99219 17.9785C3.75391 18.7754 4.75391 18.748 5.19922 18.834C6.80078 18.9863 12 19.0332 12 19.0332C12 19.0332 16.2031 19.0254 19 18.8262C19.3906 18.7793 20.2422 18.7754 21.0039 17.9785C21.6055 17.373 21.8008 15.9941 21.8008 15.9941C21.8008 15.9941 22 14.377 22 12.7559V11.2402C22 9.62305 21.8008 8.00195 21.8008 8.00195ZM9.93359 14.5957V8.97461L15.3359 11.7949L9.93359 14.5957Z"></path></svg>


export const linkedin = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3ZM8.339 18.337H5.667V9.747H8.339V18.337ZM7.003 8.574C6.59244 8.574 6.1987 8.41091 5.9084 8.1206C5.61809 7.8303 5.455 7.43655 5.455 7.026C5.455 6.61544 5.61809 6.22171 5.9084 5.9314C6.1987 5.64109 6.59244 5.478 7.003 5.478C7.41356 5.478 7.80729 5.64109 8.0976 5.9314C8.38791 6.22171 8.551 6.61544 8.551 7.026C8.551 7.43655 8.38791 7.8303 8.0976 8.1206C7.80729 8.41091 7.41356 8.574 7.003 8.574ZM18.338 18.337H15.669V14.16C15.669 13.164 15.651 11.883 14.281 11.883C12.891 11.883 12.68 12.969 12.68 14.09V18.338H10.013V9.748H12.573V10.922H12.61C12.965 10.247 13.837 9.535 15.134 9.535C17.838 9.535 18.337 11.313 18.337 13.627L18.338 18.337Z"></path></svg>


export const x = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>