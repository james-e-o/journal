'use client'
import { Button,buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Avatar,  AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Calculator, CalculatorIcon, Home, Package2 } from "lucide-react";
const DashboardLayout = ({ href,children }) => {
  const pathname = usePathname()
  let current = pathname.split('/')[pathname.split('/').length-1]
  return (
    <div className='overflow-hidden relative w-full flex h-full '>
      <div className='flex flex-col justify-between w-[15%] border-l-[40px] border-zinc-900 bg-zinc-900 h-full'>
        <div className="flex pt-10 justify-center">
          <Image className="dark:invert " src="/rayani3.png" alt="logo" width={70} height={50} priority />
        </div>
        <div className="flex flex-col gap-1 items-center mt-1 pt-3 justify-center">
          <Link className="w-full " href={'#'}><Button data-path={current} variant={''} className={'text-base data-[path=user]:bg-white flex justify-start items-center text-bold text-start rounded-l-full rounded-r-none data-[path=user]:text-zinc-950 text-white h-[4.5rem] w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent data-[path=user]:transition-none data-[path=user]:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12 after:-bottom-12 after:right-0 after:bg-transparent after:z-1 data-[path=user]:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><Home className="ml-2"/><span>Home</span></Button></Link>
          {/* <Link className="w-full " href={'#'}><Button variant={''} className={'text-base flex justify-start text-bold text-start rounded-l-full rounded-r-none hover:bg-white hover:text-zinc-950 text-white h-[4.5rem] w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent hover:transition-none hover:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12 after:-bottom-12 after:right-0 after:bg-transparent after:z-1 hover:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}>Accounts</Button></Link> */}
          <Link className="w-full " href={'#'}><Button data-path={current} variant={''} className={'text-base flex justify-start text-bold text-start rounded-l-full rounded-r-none hover:bg-white hover:text-zinc-950 text-white h-[4.5rem] w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent hover:transition-none hover:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12 after:-bottom-12 after:right-0 after:bg-transparent after:z-1 hover:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><Package2 className="ml-2"/> Resources</Button></Link>
          <Link className="w-full " href={'#'}><Button data-path={current} variant={''} className={'text-base flex justify-start text-bold text-start rounded-l-full rounded-r-none hover:bg-white hover:text-zinc-950 text-white h-[4.5rem] w-full relative before:absolute before:size-12 before:-top-12 before:right-0 before:bg-transparent hover:transition-none hover:before:shadow-[35px_35px_0px_10px_white] before:rounded-full  after:absolute after:size-12 after:-bottom-12 after:right-0 after:bg-transparent after:z-1 hover:after:shadow-[35px_-35px_0px_10px_white] after:rounded-full'}><CalculatorIcon className="ml-2" /> Calculator</Button></Link>
        </div>
        <div>
          Details
        </div>
      </div>
      <div className=' pl-8 pr-5 pb-2 pt-3 flex-grow overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
