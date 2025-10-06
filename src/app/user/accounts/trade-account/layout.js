'use client'
import { Calendar04 } from '@/components/calendars'
import { BadgeVariant } from './page';
import {useEffect, useState} from 'react'
import { Calendar23 } from '@/components/range-calendars';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import { ArrowLeft,X, Calculator, ChartCandlestick, ChartColumn, FileUser, Plus, Settings, Info, NotebookText, NotepadText, Calendar } from 'lucide-react';
import Link from 'next/link';

const TradeAccount = ({children}) => {
  return (
          <Sheet>
            <div className=' flex inset-0 overflow-hidden  bg-black/10 shadow-md shadow- absolute z-40 '>
                <div className=' p-2 border-zinc-400 border absolute md:inset-x-1.5 inset-x-0.5 shadow-0 md:inset-y-1 inset-y-0.5 md:overflow-y-hidden bg-zinc-100 overflow-x-hidden rounded-md'>
                  <div className='hidden lg:grid lg:grid-cols-[4fr_1.5fr] gap-2 overflow-y-auto h-full'>
                    <div className='flex-grow md:flex-row flex flex-col-reverse  gap-2 h-full'>
                      <TradeSection />
                      <MainSection  children={children}/>
                    </div>
                    <div className=' '>
                      <DataSection />
                    </div>
                  </div>
                  {/* MOBILE VIEW */}
                  <div className='lg:hidden h-full'>
                    <MobileMainSection  children={children}/>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                </div>
            </div>
                <SheetContent side='left'>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-name">Name</Label>
                      <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-username">Username</Label>
                      <Input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
          </Sheet>
  )
}

export default TradeAccount



    export const MainSection = ({children}) => {
      return (
        <div className='justify-start w-full overflow-hidden h-full flex flex-col '>
            <header className=' flex justify-between gap-2.5 items-center p-3 bg-white shadow-xs rounded-md'>
              <p className='font-semibold font-WixMade tracking-tight text-black overflow-ellipsis whitespace-nowrap overflow-hidden text-sm'>Car Maintenance Account</p>
              
              <Link href={'/user/trade-account/new-journal'}><Button className={'from-amber-300 tracking-tight opacity-90  mr-0.5 cursor-pointer items-center flex font-WixMade rounded-full h-5 to-[gold] bg-gradient-to-t text-zinc-950 p-4 px-5 border-[3px] border-zinc-300 text-[13px] font-bold'}><Plus/>New Journal</Button></Link>
              
            </header>
            <div className='flex-col flex mt-1.5 rounded-md overflow-hidden shadow-xs flex-grow'>
              <div className=" rounded-md items-center px-2 bg-white py-2 flex justify-end gap-1">
                
                <nav className='justify-end gap-4 flex'>
                  <SheetTrigger asChild ><Button variant={'ghost'} className={'h-8 cursor-pointer'}><FileUser className='size-6'/></Button></SheetTrigger>
                  <Link href='/user/trade-account/risk-calculator'><Button variant={'ghost'} className={'h-8 cursor-pointer'}><Calculator className='size-6 '/></Button></Link>
                  <SheetTrigger asChild ><Button variant={'ghost'} className={'h-8 cursor-pointer'}><Settings className='size-6'/></Button></SheetTrigger>                 
                </nav>
              </div>
              <div className='flex flex-col mt-2 rounded-md overflow-hidden bg-white flex-grow'>
                <div className='bg-white h-full shadow-xs overflow-x-hidden no_scroll w-full overflow-y-scroll p-2 rounded-md'>{children}</div>
              </div>  
            </div>
        </div>
      )
    }

    export const MobileMainSection = ({children}) => {
      const pathname = usePathname()
      const [extension,setExtension] = useState(false)
      useEffect(()=>{
        setExtension(false)
      },[pathname])
      return (
        <div className='justify-start w-full overflow-hidden h-full flex flex-col '>
            <header className=' flex justify-between gap-2.5 items-center p-3 bg-white shadow-xs rounded-md'>
              <p className='font-semibold font-WixMade tracking-tight text-black overflow-ellipsis whitespace-nowrap overflow-hidden text-sm'>Car Maintenance Account</p>
              
              <Link href={'/user/trade-account/new-journal'}><Button className={'from-amber-300 tracking-tight opacity-90  mr-0.5 cursor-pointer items-center flex font-WixMade rounded-full h-5 to-[gold] bg-gradient-to-t text-zinc-950 p-4 px-5 border-[3px] border-zinc-300 text-[13px] font-bold'}><Plus/>New Journal</Button></Link>
              
              <Link className='lg:hidden  flex mt-0 relative justify-end gap-4' href={'/user'}>
                <div >
                  <Button variant={'outline'} className={' px-6 text-black cursor-pointer flex items-center border-zinc-200 relative  hover:bg-zinc-50 shadow-xs rounded-md h-7 md:h-8'}><X className=' z-10' /></Button>                 
                </div>
              </Link>
            </header>
            <div className='flex-col flex mt-1.5 rounded-md overflow-hidden shadow-xs flex-grow'>
              <div className=" rounded-md items-center px-2 bg-white py-2 flex justify-between gap-1">
                <div className=''>
                  <SheetTrigger asChild ><Button variant={'ghost'} className={'h-8 cursor-pointer'}><Settings className='size-6'/></Button></SheetTrigger>                 
                </div>
                
                <nav className='justify-end gap-3 flex'>
                  <Link onClick={()=>{setExtension(false)}} href='/user/trade-account'><Button variant={'ghost'} className={'h-8 cursor-pointer'}><Calendar className='size-6 '/></Button></Link>
                  <Link onClick={()=>{setExtension(false)}} href='/user/trade-account/info'><Button variant={'ghost'} className={'h-8 cursor-pointer'}><Info className='size-6 '/></Button></Link>
                  <Link onClick={()=>{setExtension(false)}} href='/user/trade-account/journals'><Button variant={'ghost'} className={'h-8 cursor-pointer'}><NotepadText className='size-6 '/></Button></Link>
                  <Button variant={'ghost'} onClick={()=>{setExtension(true)}} className={'h-8 cursor-pointer'}><ChartCandlestick className='size-6 '/></Button>
                  <Link onClick={()=>{setExtension(false)}} href='/user/trade-account/risk-calculator'><Button variant={'ghost'} className={'h-8 cursor-pointer'}><Calculator className='size-6 '/></Button></Link>
                </nav>
              </div>
              <div className='flex flex-col mt-2 rounded-md overflow-hidden bg-white flex-grow'>
                <div className='bg-white h-full shadow-xs overflow-x-hidden no_scroll w-full overflow-y-scroll rounded-md'>
                  <div data-ext={extension} className="w-[200%] transition-all data-[ext=true]:-left-full left-0 relative h-full flex">
                    <div className="w-full bg-white p-2 h-full">
                      {children}
                    </div>
                    <div className="w-full h-full bg-indigo-500 p-2"></div>
                  </div>
                </div>
              </div>  
            </div>
        </div>
      )
    }

    export const TradeSection = () => {
      return (
        <div id='first_' className='w-[70%] rounded-md p-2 bg-white'>
          <p className='text-xs text-zinc-700 relative -top-0.5 bg-white font-WixMade tracking-tighter p-1 font-bold'>3rd June</p>
          <Tabs defaultValue='trades' className={''}>
            <TabsList className={'w-full bg-[#fafafa]'}>
              <TabsTrigger className={'data-[state=active]:bg-white'} value='trades'>Trades</TabsTrigger>
              <TabsTrigger className={'data-[state=active]:bg-white'} value='journals'>Journals</TabsTrigger>
            </TabsList>

          </Tabs>
        </div>
      )
    }

    export const DataSection = () => {
      return (
        <div className=' flex gap-1.5 flex-col h-full'>
              <div className=' shadow-sm px-4  pt-3 pb-5 bg-white rounded-md'>
                <div className=''>
                    <div className='lg:flex hidden mt-0 relative -top-0.5 justify-end gap-4'>
                      <Button variant={'outline'} className={' px-6 text-black cursor-pointer flex items-center border-zinc-200 relative -top-0.5 hover:bg-zinc-50 shadow-xs rounded-md h-8'}><X className=' z-10' /></Button>                 
                    </div>
                    <div className="flex items-center gap-3 mt-0">
                      <p className='font-medium font-WixMade tracking-tight text-zinc-600 text-[11px]'>Balance</p>
                      <p className='font-semibold font-MontserratAl tracking-tight text-zinc-900 text-xl'>{'$20,000'}</p>
                    </div>
                    <div className='mt-2 flex items-center gap-1'>
                      <BadgeVariant size={2} percent={12}/>
                      <p className='text-xs text-zinc-700 font-medium font-WixMade '>{`(+ $4400 This month)`}</p>
                    </div>
                    <div className="flex w-full mt-2 text-sm items-center justify-start gap-4">
                      <span className="capitalize text-zinc-600">broker: <span className='font-semibold text-black'>{'Exness'}</span></span>{"|"}
                      <span className=" text-sm capitalize text-zinc-600">Currency: <span className='font-semibold text-black'>{'USD'}</span></span>      
                    </div>
                </div>
              </div>
              <Calendar04 />
                {/* <div className=' shadow-sm px-4 py-2 flex-grow bg-white rounded-md'>
                  <div className="h-full flex flex-col">
                    <p className='text-xs text-zinc-700 relative border-b -top-0.5 font-WixMade tracking-tighter p-1 font-medium'>3rd June</p>
                    <div className=' flex-grow flex flex-col gap-0.5 justify-center'>
                        <p className='text-base justify-between text-zinc-800 px-1 flex items-center gap-3 font-WixMade tracking-tighter font-medium'><span className='text-zinc-500 text-sm'>Total trade:</span><span className='font-semibold text-green-500'>{'$400'}</span></p>
                        <p className='text-sm justify-between text-zinc-800 px-1 flex items-center gap-3 font-WixMade tracking-tight font-medium'><span className='text-zinc-500'>Number of trades:</span><span className='font-semibold'>{'5'}</span></p>
                        <p className='text-sm text-zinc-800 justify-between px-1 flex items-center gap-3 font-WixMade tracking-tight font-medium'><span className='text-zinc-500'>Average Holding Time:</span><span className='font-semibold'>{'1hr 20mins'}</span></p>
                    </div>
                  </div>
                </div> */}
        </div>
      )
    }
    




{/* <div className=''>
                  <Button className={'h-7 border-zinc-300 border-3 flex items-center'}><ArrowLeft className='top-[1px] relative'/> Home</Button>
                </div> */}