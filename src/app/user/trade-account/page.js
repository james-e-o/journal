'use client'
import {useState} from 'react'
import { DataSection, TradeSection } from './layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft,X, Calculator, ChartCandlestick, ChartColumn, FileUser, Plus, Settings } from 'lucide-react';
import { BadgeVariant } from '../page'
import { Calendar04 } from '@/components/calendars'


const TradeAccount = () => {
  return (
    <div>
        <div className='block md:hidden'>
          <ResponsiveDataSection />
        </div>
    </div>
  )
}

export default TradeAccount



export const ResponsiveDataSection = () => {
      return (
        <div className=''>
              <div className=' shadow-sm px-4  pt-3 pb-5 bg-white rounded-md'>
                <div className=''>
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