'use client'
import { Button,buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Avatar,  AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Tabs, TabsList,TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Calculator, CalculatorIcon, CircleDollarSign, FileLineChart, Home, Package2 } from "lucide-react";
const DashboardLayout = ({ href,children }) => {
  const pathname = usePathname()
  let current = pathname.split('/')[pathname.split('/').length-1]
  return (
    <Tabs defaultValue='home' className='overflow-hidden flex-row relative w-full flex h-full '>
      <div className='flex flex-col justify-between w-[14%] md:w-60 border-l-[0.4vw]  md:border-l-[1.8vw] border-zinc-900 bg-zinc-900 h-full'>
        <div className="flex pt-5 md:pt-10 justify-center">
          <Image className="dark:invert scale-75 md:scale-100 " src="/rayani3.png" alt="logo" width={50} height={50} priority />
        </div>
        <div className="bg-transparent flex-grow pt-20">
            <TabsList className="flex h-fit bg-transparent w-full relative left-[0.3rem] flex-col gap-8 md:gap-3 items-center mt-1 pt-3 justify-center">
              <TabsTrigger value='home' className={'md:text-base data-[state=active]:bg-white flex z-10 justify-center items-center text-bold text-start rounded-l-full rounded-r-none data-[state=active]:text-zinc-950 text-white h-6 md:h-[2.5rem] text-xs sm:text-sm py-3 sm:py-2  md:py-6 w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent data-[state=active]:transition-none data-[state=active]:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12  after:-bottom-12 after:-right-0 after:bg-transparent after:-z-1 data-[state=active]:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><Home className=" z-40 relative -left-1 md:left-0"/><span className="hidden md:inline z-40">Home</span></TabsTrigger>
              <TabsTrigger value='accounts' className={'md:text-base data-[state=active]:bg-white flex z-10 justify-center items-center text-bold text-start rounded-l-full rounded-r-none data-[state=active]:text-zinc-950 text-white h-6 md:h-[2.5rem] text-xs sm:text-sm py-3 sm:py-2 md:py-6 w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent data-[state=active]:transition-none data-[state=active]:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12  after:-bottom-12 after:-right-0 after:bg-transparent after:-z-1 data-[state=active]:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><FileLineChart className=" z-40 relative -left-1 md:left-0"/><span className="hidden md:inline z-40"> Accounts</span></TabsTrigger>
              <TabsTrigger value='resource' className={'md:text-base data-[state=active]:bg-white flex z-10 justify-center items-center text-bold text-start rounded-l-full rounded-r-none data-[state=active]:text-zinc-950 text-white h-6 md:h-[2.5rem] text-xs sm:text-sm py-3 sm:py-2 md:py-6 w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent data-[state=active]:transition-none data-[state=active]:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12  after:-bottom-12 after:-right-0 after:bg-transparent after:-z-1 data-[state=active]:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><Package2 className=" z-40 relative -left-1 md:left-0"/><span className="hidden md:inline z-40"> Resources</span></TabsTrigger>
              <TabsTrigger value='subscription' className={'md:text-base data-[state=active]:bg-white flex justify-center items-center text-bold text-start rounded-l-full rounded-r-none data-[state=active]:text-zinc-950 text-white h-6 md:h-[2.5rem] text-xs sm:text-sm py-3 sm:py-2 md:py-6 w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent data-[state=active]:transition-none data-[state=active]:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12  after:-bottom-12 after:-right-0 after:bg-transparent after:z-1 data-[state=active]:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><CircleDollarSign className=" z-40 relative -left-1 md:left-0"/><span className="hidden md:inline z-40">Subscription</span></TabsTrigger>
            </TabsList>
          </div>
        <div>
          Details
        </div>
      </div>
      <div className='pl-1 z-10 md:pl-8 pr-2 md:pr-5 pb-1 pt-2 md:pt-3 flex-grow overflow-hidden'>
        {children}
      </div>
    </Tabs>
  )
}

export default DashboardLayout
