'use client'
import Header from '@/components/dashboard-header'
import {useState,useRef,useEffect,createContext} from 'react'
import Image from "next/image";
import { Avatar,  AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge'
import { Button,buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

import {Card,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {DropdownMenu,DropdownMenuContent,DropdownMenuGroup,DropdownMenuItem,DropdownMenuLabel,DropdownMenuPortal,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Bell,Mail, MessageSquare,Plus,TrendingDownIcon, TrendingUpIcon,X ,Check, ChevronsUpDown, GripIcon, GripHorizontalIcon, ArrowRight } from "lucide-react";
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { ChartPieLabelList } from '@/components/charts/pie-chart';
import { Calendar23 } from '@/components/range-calendars';
import { TabsContent } from '@/components/ui/tabs';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import { PieChart, Pie, Cell } from 'recharts'
import { CalendarMain } from '@/components/main-calendar';
import { ChartBarNegative } from '@/components/charts/_bar-chart';
import { ChartAreaDefault } from '@/components/charts/_area-chart';
import { ChartRadarDefault } from '@/components/charts/_radar-chart';





const Dashboard = ({user,session}) => {


  return (
   
    <div className='flex-col  border-b-8 overflow-hidden h-full flex'>
      <div className='h-12'>
        <Header >
          <div className="flex">
            <div className='md:flex gap-2 hidden mr-1 items-center '>
              <Calendar23 buttonWidth={'w-[140px]'}/>
              <p className='relative -top-1'>
                {/* <ComboDropTemplate buttonWidth={'w-[120px]'}/> */}
                <DropBox buttonWidth={'w-[120px]'}/>
              </p>
            </div>
            <Button variant='ghost' size='icon' className='relative ml-3'>
              <Bell className='h-5 w-5'/>
              <span className='absolute -top-0.5 -right-0.5 text-[9px] bg-red-600 translate-x-[-48.8%] translate-y-[48.9%] text-white font-semibold flex items-center justify-center size-3.5 rounded-full'>3</span>
            </Button>
          </div>
        </Header>
      </div>
      <div className='md:px-5 flex-col overflow-y-hidden flex-grow p-0.5 flex px-3'>
        <div className='h-full no_scroll overflow-y-scroll overflow-x-hidden '>
        <div className='flex justify-between py-2 items-center'>
          <p className='ml-0.5 font-medium'>Hello {'User'}!</p>
          <nav className=''>
           
          </nav>
        </div>
        <div className='flex md:hidden gap-2 mr-1 items-center '>
          <Calendar23 buttonWidth={'w-[140px]'}/>
          <p className='relative -top-1'>
            {/* <ComboDropTemplate buttonWidth={'w-[120px]'}/> */}
            <DropBox buttonWidth={'w-[120px]'}/>
          </p>
        </div>
        <div className='flex flex-col flex-grow gap-4 mt-2'>

          {/* <div className='text-green-600 text-base font-semibold'>{session.user.id}</div> */}
          <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
            <StatsCards />
            <StatsCards />
            <StatsCards />
            <StatsCards />
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div className='col-span-2'>
              <CalendarMain />
              
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <ChartBarNegative />
            <ChartAreaDefault />
            <ChartRadarDefault />
          </div>
          <div className='grid grid-cols-3'></div>
          {/* <ChartPieLabelList/> */}

        </div>
      </div>
      </div>
     </div>
 
  )
}

export default Dashboard


export const ComboDropTemplate = ({value,setValue,list,data,b_placeholder,s_placeholder,comboSearch,comboWidth,buttonWidth,buttonHeight}) => {
    const [open, setOpen] = useState(false)
  

    // useEffect(()=>{
    //     setButtonWidth(width)
    // })    

    return (
        <Popover className='' open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={` ${buttonWidth || comboWidth || 'w-[150px]'} ${buttonHeight|| 'h-8'} mt-2 justify-between`}
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

const DropBox = ({buttonWidth,buttonHeight,comboWidth}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          // aria-expanded={open}
          className={` ${buttonWidth || comboWidth || 'w-[150px]'} ${buttonHeight|| 'h-8'} mt-2 justify-between`}
          >
          {'Select...'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



export function StatsCards() {
  const profitFactor = 1.24
  const winRate = 39.02
  const wins = 32
  const losses = 51




  return (
      <div className="bg-white rounded-lg shadow-xs border p-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400">Net P/L</p>
          <p className="text-2xl mt-1 font-semibold text-black">{'1.45'}</p>
        </div>
        <div className="w-20 h-12">
          
        </div>
      </div>
  )
}
