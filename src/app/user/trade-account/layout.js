'use client'
import { Calendar04 } from '@/components/calendars'
import { BadgeVariant } from '../page';
import {useState} from 'react'
import { Calendar23 } from '@/components/range-calendars';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import { ArrowLeft, Calculator, ChartCandlestick, ChartColumn, FileUser, Plus, Settings } from 'lucide-react';
import Link from 'next/link';

const TradeAccount = ({children}) => {
  return (
          <Sheet>
            <div className=' flex inset-0 overflow-hidden  bg-black/10 shadow-md shadow- absolute z-40 '>
                <div className=' p-2 border-zinc-400 border absolute md:inset-x-1.5 inset-x-0.5 shadow-0 md:inset-y-1 inset-y-0.5 md:overflow-y-hidden bg-zinc-100 overflow-x-hidden rounded-md'>
                  <div className='hidden lg:grid lg:grid-cols-[4fr_1.3fr] gap-2 overflow-y-auto h-full'>
                    <div className='flex-grow md:flex-row flex flex-col-reverse  gap-2 h-full'>
                      <TradeSection />
                      <MainSection  children={children}/>
                    </div>
                    <div className=' '>
                      <DataSection />
                    </div>
                  </div>
                  <div className='lg:hidden h-full'>
                   <MainSection  children={children}/>
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
            <header className=' flex justify-between items-center px-3 py-2 bg-white shadow-xs rounded-md'>
              <p className='font-semibold font-WixMade tracking-tight text-black text-sm'>Car Maintenance Account</p>
              <div className='flex gap-2 items-center'>
                <p className=''><Button className={'from-amber-300 tracking-tight opacity-90  mr-0.5 cursor-pointer font-WixMade rounded-full h-5 to-[gold] bg-gradient-to-t text-zinc-950 p-3.5 px-5 shadow-sm text-[13px] font-bold'}><Plus/>New Journal</Button></p>
              </div>
            </header>
            <div className='flex-col flex mt-1.5 rounded-md overflow-hidden shadow-xs flex-grow'>
              <div className=" rounded-md items-center px-2 bg-white py-1.5 flex justify-between gap-1">
                <div className=''>
                  <Button className={'h-7 border-zinc-300 border-3 flex items-center'}><ArrowLeft className='top-[1px] relative'/> Home</Button>
                </div>
                <nav className='justify-end gap-0.5 flex'>
                  <SheetTrigger asChild ><Button variant={'ghost'} className={'h-7 cursor-pointer'}><FileUser className='scale-110 '/></Button></SheetTrigger>
                  <Link href='/user/trade-account/risk-calculator'><Button variant={'ghost'} className={'h-7 cursor-pointer'}><Calculator className='scale-110 '/></Button></Link>
                  <SheetTrigger asChild ><Button variant={'ghost'} className={'h-7 cursor-pointer'}><Settings className='scale-110 '/></Button></SheetTrigger>                 
                </nav>
              </div>
              <div className='flex flex-col mt-2 rounded-md overflow-hidden bg-white flex-grow'>
                <div className='bg-white h-full shadow-xs overflow-x-hidden no_scroll w-full overflow-y-scroll p-2 rounded-md'>{children}</div>
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
                    <div className='flex mt-1 relative -top-0.5 items-center gap-4'>
                      <p className='font-medium font-WixMade tracking-tight text-zinc-600 text-[11px]'>Balance</p>
                      <Button variant={'outline'} className={'text-[11px] py-1.5 cursor-pointer border-zinc-200 relative -top-0.5 hover:bg-zinc-50 shadow-xs rounded-md h-5'}>Account metrics</Button>                 
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <p className='font-semibold font-MontserratAl tracking-tight text-zinc-900 text-xl'>{'$20,000'}</p>
                      <div className=' flex items-center gap-1'>
                        <BadgeVariant size={2} percent={12}/>
                        <p className='text-xs text-zinc-700 font-medium font-WixMade '>{`(+ $4400 This month)`}</p>
                      </div>
                    </div>
                    <div className="flex w-full mt-2 text-sm items-center justify-start gap-4">
                      <span className="capitalize text-zinc-600">broker: <span className='font-semibold text-black'>{'Exness'}</span></span>{"|"}
                      <span className=" text-sm capitalize text-zinc-600">Currency: <span className='font-semibold text-black'>{'USD'}</span></span>      
                    </div>
                    <div className='mt-2 justify-between flex items-center'>
                      <span className=" text-sm capitalize text-zinc-600">Max. drawdown: <span className='font-semibold text-zinc-950'>{'$8000'}</span></span>  
                    </div>
                </div>
              </div>
              <Calendar04 />
                <div className=' shadow-sm px-4 py-2 flex-grow bg-white rounded-md'>
                  <div className="h-full flex flex-col">
                    <p className='text-xs text-zinc-700 relative border-b -top-0.5 font-WixMade tracking-tighter p-1 font-medium'>3rd June</p>
                    <div className=' flex-grow flex flex-col gap-0.5 justify-center'>
                        <p className='text-base justify-between text-zinc-800 px-1 flex items-center gap-3 font-WixMade tracking-tighter font-medium'><span className='text-zinc-500 text-sm'>Total trade:</span><span className='font-semibold text-green-500'>{'$400'}</span></p>
                        <p className='text-sm justify-between text-zinc-800 px-1 flex items-center gap-3 font-WixMade tracking-tight font-medium'><span className='text-zinc-500'>Number of trades:</span><span className='font-semibold'>{'5'}</span></p>
                        <p className='text-sm text-zinc-800 justify-between px-1 flex items-center gap-3 font-WixMade tracking-tight font-medium'><span className='text-zinc-500'>Average Holding Time:</span><span className='font-semibold'>{'1hr 20mins'}</span></p>
                    </div>
                  </div>
                </div>
        </div>
      )
    }




