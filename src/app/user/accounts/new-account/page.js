'use client'

import { useEffect, useState } from "react"

import { Tabs,TabsTrigger,TabsList,TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { X ,Check, ChevronsUpDown, GripIcon, GripHorizontalIcon, ArrowRight} from "lucide-react"

const NewAccount = () => {
    const [activeTab,setActiveTab]= useState('basic')
    const [type, setType] = useState("")
 


    const accountType = [
        {
            value: "demo",
            label: "Demo Account",
        },
        {
            value: "live",
            label: "Live Account",
        },
        {
            value: "proprietary",
            label: "Prop Firm Account",
        }
    ]
  

  return (
    <Tabs className=' flex inset-0  bg-black/10 shadow-md shadow- absolute z-40 '>
        <div className='bg-white flex flex-col p-2 md:p-4 md:grid grid-cols-4 gap-2 border-zinc-400 border absolute inset-x-1.5 shadow-0 inset-y-1  overflow-clip rounded-md'>
            <div className="text-start md:flex-col justify-between w-full flex p-4 md:p-6 col-span-1 font-WixMade  rounded-lg bg-zinc-900 tracking-tight text-xl font-semibold">
                <div className="scale-95 sm:scale-100 w-full">
                    <p className="font-semibold w-full md:w-4/5 text-start flex justify-between items-center md:mx-auto md:mt-4 p-1 text-sm text-white">
                        <span>New Journal Account</span> 
                        <Link className="md:hidden" href={'/user/accounts'}><Button variant={'outline'} className={'px-8 text-black h-6 w-16 cursor-pointer bg-[#fafafa]'}><X /></Button></Link>
                    </p>
                    <TabsList  className={'flex w-4/5 mt-3 md:mt-8 mx-auto items-start gap-4 md:gap-9 h-fit md:flex-col bg-transparent'}>
                        <TabsTrigger onClick={()=>{setActiveTab('basic')}} className="font-medium new text-start p-0 flex justify-start bg-transparent rounded-none" value="basic">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
                                <p data-activetab={activeTab} className="text-amber-400 data-[activetab=basic]:bg-amber-400 border data-[activetab=basic]:text-black  border-amber-400 rounded-full size-5 md:size-6 inline-flex items-center justify-center  bg-transparent text-base md:text-2xl font-bold"><span className="text-xs font-semibold">1</span></p>
                                <div className="flex flex-col  md:gap-0.5">
                                    <p className="text-zinc-400 text-[10px] uppercase font-medium">step 1</p>
                                    <p className="text-white text-xs lg:text-sm uppercase font-medium">Account Info</p>
                                </div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger onClick={()=>{setActiveTab('link')}} className="font-medium  text-start p-0 flex justify-start bg-transparent rounded-none" value="link">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
                                <p data-activetab={activeTab} className="text-amber-400 data-[activetab=link]:bg-amber-400 border data-[activetab=link]:text-black  border-amber-400 rounded-full size-5 md:size-6 inline-flex items-center justify-center  bg-transparent text-base md:text-2xl font-bold"><span className="text-xs font-semibold">2</span></p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-zinc-400 text-[10px] uppercase font-medium">step 2</p>
                                    <p className="text-white text-xs lg:text-sm uppercase font-medium">Link Trader</p>
                                </div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger onClick={()=>{setActiveTab('setup')}} className="font-medium text-start p-0 flex justify-start bg-transparent rounded-none" value="partners">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
                                <p   data-active="tabs-trigger" data-activetab={activeTab} className="text-amber-400 data-[activetab=setup]:bg-amber-400 border data-[activetab=setup]:text-black  border-amber-400 rounded-full size-5 md:size-6 inline-flex items-center justify-center  bg-transparent text-base md:text-2xl font-bold"><span className="text-xs font-semibold">3</span></p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-zinc-400 text-[10px] uppercase font-medium">step 3</p>
                                    <p className="text-white text-xs lg:text-sm uppercase font-medium">Professional <br/> setup</p>
                                </div>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                </div>
                <div className="flex opacity-20 gap-2">
                    <Candle />
                    <Candle />
                    {/* <Candle /> */}
                </div>
            </div>
            <div className="text-start col-span-2 px-4 md:px-10 py-4 h-full flex-col mb-1 flex font-WixMade flex-grow tracking-tighter text-xl font-semibold">
                <div className="hidden md:flex relative -top-2 justify-end">
                    <Link href={'/user/accounts'}><Button variant={'outline'} className={'px-8 w-16 cursor-pointer bg-[#fafafa]'}><X /></Button></Link>
                </div>
                <div className="flex-grow">
                {
                    activeTab==='basic'?    <div className={'flex flex-col h-full justify-between'}>
                            <div>
                                <p className="text-xl md:text-3xl tracking-normal font-bold font-MontserratAl">Account Info</p>
                                <div className="mt-9">
                                    <div className="mt-4">
                                        <Label className='ml-0.5'>Account Name:</Label>
                                        <Input className={'mt-2'}/>
                                    </div>
                                    <div class="flex mt-4 gap-5 items-center">
                                        <div className=" flex-grow">
                                            <Label className='ml-0.5'>Broker:</Label>
                                            <Input className={'mt-2'}/>
                                        </div>
                                        <div className=" flex-grow">
                                            <Label className='ml-0.5'>Currency:</Label>
                                            <Input className={'mt-2'}/>
                                        </div>
                                    </div>
                                    <div class="flex mt-4 gap-5 items-center">
                                        <div className=" flex-grow">
                                            <Label className='ml-0.5'>Account Type:</Label>
                                            <ComboDropTemplate data={accountType} value={type} setValue={setType}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end  px-4 py-2">
                                <Button className={''}>Next Step</Button>
                            </div>
                    </div>:
                    activeTab==='link'?    <Tabs className={'flex flex-col h-full justify-between'}>
                            <div className="flex-grow">    
                                <div className="h-full flex-col flex">
                                    <p className="text-xl md:text-3xl tracking-normal font-bold font-MontserratAl">Link Trader</p>
                                    <div className="mt-9 flex-grow">
                                        <LinkAccount />                                    
                                    </div>
                                </div>                            
                            </div>
                            <div className="flex justify-end px-4 py-2">
                                <Button className={''}>Next Step</Button>
                            </div>
                    </Tabs>:
                    activeTab==='setup'?    <div className={'flex flex-col h-full justify-between'}>
                            <div>                                
                                <p className="text-xl md:text-3xl tracking-normal capitalize font-bold font-MontserratAl">Professional setup</p>
                                <div className="mt-9">
                                    <p className="text-sm font-bold tracking-normal italic w-fit py-2 px-1 border-b">Account Rules/Goals</p>
                                    <p className="text-sm mt-3 tracking-normal w-fit flex items-center gap-2 py-2 px-1 "><GripHorizontalIcon /><span>Daily</span></p>
                                      <div class="flex mt-4 gap-6 items-center">
                                        <div className=" flex-grow">
                                            <Label className='ml-0.5 font-light'>Daily Max. Drawdown:</Label>
                                            <Input className={'mt-2 h-7'}/>
                                        </div>
                                        <div className=" flex-grow">
                                            <Label className='ml-0.5 font-light'>Daily Target:</Label>
                                            <Input className={'mt-2 h-7'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end  px-4 py-2">
                                <Button className={''}>Next Step</Button>
                            </div>
                    </div>:''
                }
                </div>
            </div>
        </div>
    </Tabs>
  )
}

export default NewAccount

const LinkAccount = () => {
            const [trader, setTrader] = useState("")
            const [brokerList, setBrokerList] = useState("list")
            const Trader = [
                {
                    value: "mt5",
                    label: "Meta Trader",
                },
                {
                    value: "ctrader",
                    label: "CTrader",
                },
                {
                    value: "trading-view",
                    label: "Trading View",
                }
            ]
    return(
            <Tabs className='flex-col flex h-full'  defaultValue={'broker'}>
                <p className="font-medium text-sm mb-0.5 items-center flex gap-2">Link via <ArrowRight className="size-4"/></p>
                <TabsList className={`inline-flex -ml-0.5 bg-transparent px-0 gap-5 rounded-none`}>
                    <TabsTrigger value='broker' className={`shadow-none border-[3px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-yellow-200/70 `}>Broker API</TabsTrigger>
                    <TabsTrigger value='platform' className={`shadow-none border-[3px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-yellow-200/70 `}>Trading Platform</TabsTrigger>
                </TabsList>
    
                        <TabsContent className='' value='broker'>
                            <div class="flex-col flex h-full">
                                <div className="flex items-center gap-3">
                                    <div className=" flex-grow">
                                        <ComboDropTemplate data={Trader} comboSearch b_placeholder={'Search broker'} value={trader} setValue={setTrader}/>
                                    </div>
                                    <div className=" flex-grow">
                                        {/* <Label className='ml-0.5'>Broker</Label> */}
                                        <ComboDropTemplate data={Trader} b_placeholder={' Sort by Country'} value={trader} setValue={setTrader}/>
                                    </div>
                                </div>
                                <div className="bg-amber-400 flex-grow">
                                    {
                                        brokerList==='list'?<div className="">
                                            hello world
                                        </div>:
                                        brokerList==='item'?<div className="">

                                        </div>:''
                                    }
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent className='bg-pink-500' value='platform'>
                            hi
                        </TabsContent>
            
            </Tabs>
    )
}







export const ComboDropTemplate = ({value,setValue,list,data,b_placeholder,s_placeholder,comboSearch,comboWidth}) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover className='' open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={`${comboWidth?comboWidth:'w-[200px]'} mt-2 justify-between`}
                >
                {value
                    ? data.find((item) => item === value)
                    // :defaultVal?defaultVal
                    : `${b_placeholder?b_placeholder:'Select...'}`}
                <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`${comboWidth?comboWidth:'w-[200px]'} p-0`}>
                <Command>
                {comboSearch&&<CommandInput placeholder={s_placeholder?s_placeholder:`Search...`} className="h-7" />}
                {list&&<CommandList>
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                    {data.map((item) => (
                        <CommandItem
                        key={item}
                        value={item}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                        {item}
                        <Check
                            className={cn(
                            "ml-auto",
                            value === item? "opacity-100" : "opacity-0"
                            )}
                        />
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>}
                </Command>
            </PopoverContent>
        </Popover>
    )
}


export const Candle = ({
  bodyHeight = 40,   // body height
  bodyWidth = 12,    // body width
  wickTop = 20,      // wick above body
  wickBottom = 20,   // wick below body
  bullish = true,    // green if bullish, red if bearish
  color='bg-amber-400',             // optional custom Tailwind color
  opacity = 1,       // opacity (0–1 range for precision)
  top = 0,           // absolute top position
  left = 0           // absolute left position
}) => {
  const candleColor = color || (bullish ? "bg-green-500" : "bg-red-500");

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        top,
        left,
        opacity,
      }}
    >
      {/* Top wick */}
      <div
        className={` ${candleColor}`}
        style={{ height: wickTop, width: 1 }}
      ></div>

      {/* Candle body */}
      <div
        className={` ${candleColor}`}
        style={{ height: bodyHeight, width: bodyWidth }}
      ></div>

      {/* Bottom wick */}
      <div
        className={`relative ${candleColor}`}
        style={{ height: wickBottom, width: 1 }}
      ></div>
    </div>
  );
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwa2p6YWJ2eGd2aHh3dHFjemtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NTIxMDksImV4cCI6MjA3MjMyODEwOX0.g9awIFrD3Wb3JWjH89-BY-SpPP7GsLL4PoiwDnDQxXY



//   <div className="flex mt-4 gap-5 items-center">
//                         <div className=" flex-grow">
//                             <Label className='ml-0.5'>Broker Server:</Label>
//                             <Input className={'mt-2'}/>
//                         </div>
//                     </div>
//                     <div class="flex mt-4 gap-5 items-center">
//                         <div className=" flex-grow">
//                             <Label className='ml-0.5'>Account Login:</Label>
//                             <Input className={'mt-2'}/>
//                         </div>
//                         <div className=" flex-grow">
//                             <Label className='ml-0.5'>Investor Password:</Label>
//                             <Input className={'mt-2'}/>
//                         </div>
//                     </div>