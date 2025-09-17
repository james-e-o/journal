'use client'
import { Calendar04 } from '@/components/calendars'
import { BadgeVariant } from '../page';
import {useState} from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import { Calculator, ChartCandlestick, ChartColumn, FileUser, Settings } from 'lucide-react';
import Link from 'next/link';

const TradeAccount = ({children}) => {
  return (
          <Sheet>
            <div className=' flex inset-0 overflow-hidden  bg-black/10 shadow-md shadow- absolute z-40 '>
                <div className='bg-zinc-50 p-2 border-zinc-400 border gap-2 absolute md:inset-x-1.5 inset-x-0.5 shadow-0 md:inset-y-1 inset-y-0.5 grid md:grid-cols-[.8fr_1.2fr_max-content] overflow-y-auto md:overflow-y-hidden overflow-x-hidden rounded-md'>
                    <div id='first_' className=' rounded-md p-2 bg-white'>
                      <p className='text-xs text-zinc-700 relative -top-0.5 bg-white font-WixMade tracking-tighter p-1 font-bold'>3rd June</p>
                      <Tabs defaultValue='trades' className={''}>
                        <TabsList className={'w-full bg-[#fafafa]'}>
                          <TabsTrigger className={'data-[state=active]:bg-white'} value='trades'>Trades</TabsTrigger>
                          <TabsTrigger className={'data-[state=active]:bg-white'} value='journals'>Journals</TabsTrigger>
                        </TabsList>

                      </Tabs>
                       {/* <p className='text-xs text-zinc-700 relative border-b -top-0.5 bg-white font-WixMade tracking-tighter p-1 font-medium'>3rd June</p>
                       <div className='mt-3'>
                        <div className=''>
                          <p className='text-xs px-1 font-medium tracking-tighter'>Journaled Trades</p>
                        </div>
                        <div className=''>
                            <div className=' flex justify-between gap-2 py-2 px-1 mt-2'>
                              <p className='text-xs px-1 font-medium tracking-tighter'>Non Journaled Trades</p>
                              <div className=' flex items-center flex-grow rounded bg-white gap-2'>
                                <p className='font-medium font-WixMade text-xs tracking-tight'>Pre Trade Journal</p>
                              </div>
                              <div className=' flex items-center flex-grow rounded bg-white gap-2'>
                                <p className='font-medium font-WixMade text-xs tracking-tight'>Trades</p>
                              </div>
                          </div>
                        </div>
                       </div> */}
                    </div>
                    <div className='justify-start flex flex-col '>
                        <div className=' flex justify-between items-center px-3 py-2 bg-white shadow-xs rounded-md'>
                          <p className='font-semibold font-WixMade tracking-tight text-black text-sm'>Car Maintenance Account</p>
                          <div className='flex gap-2 items-center'>
                            <p className=''><Button className={'from-amber-300 tracking-tight opacity-90  mr-0.5 cursor-pointer font-WixMade rounded-full h-5 to-[gold] bg-gradient-to-t text-zinc-950 p-3.5 px-5 shadow-xs text-[13px] font-bold'}>New Journal</Button></p>
                            <div className=" flex gap-1">
                              <SheetTrigger asChild ><Button variant={'ghost'} className={'h-7 cursor-pointer'}><FileUser className='scale-110 '/></Button></SheetTrigger>
                              <Link href='/user/trade-account/risk-calculator'><Button variant={'ghost'} className={'h-7 cursor-pointer'}><Calculator className='scale-110 '/></Button></Link>
                              <SheetTrigger asChild ><Button variant={'ghost'} className={'h-7 cursor-pointer'}><Settings className='scale-110 '/></Button></SheetTrigger>
                            </div>
                          </div>
                        </div>
                        <div className='flex-col flex mt-2 rounded-md shadow-xs flex-grow'>
                          <div className='bg-white h-full shadow-xs px-2 py-1 rounded-md'>{children}</div>
                        </div>
                    </div>
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

