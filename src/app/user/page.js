'use client'
import { Calendar04 } from '@/components/calendars'
import {useState} from 'react'
import Image from "next/image";
import { Avatar,  AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {Card,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button,buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Bell,Mail, MessageSquare,Plus,TrendingDownIcon, TrendingUpIcon, } from "lucide-react";
import { ChartPieLabelList } from '@/components/pie-chart';
import { Calendar23 } from '@/components/range-calendars';

const Dashboard = ({}) => {
  return (
    <div className=' flex overflow-y-hidden flex-col h-full '>
       <header className='h-fit flex mb-3 justify-between items-center rounded-xl bg-zinc-50 px-10 py-3 '>
          <nav> 
            <Avatar className='items-center inline-flex rounded-full size-7 justify-center'>
              <Image src='/dummy.jpg' width={50} height={50} className=" w-full " alt="@storeprobuilder"/>
            </Avatar>
          </nav>
        </header>
        <div className="flex justify-end gap-4 py-2">
          <Link href={'/user/new-account'}><Button variant={'ghost'} className={' opacity-90  mr-0.5 cursor-pointer font-WixMade rounded-full h-9 text-zinc-950 py-6 px-14 flex items-center text-base font-semibold'}><Plus /> New Account</Button></Link>
          <Button className={'from-amber-300 opacity-90  mr-0.5 cursor-pointer font-WixMade rounded-full h-9 to-[gold] bg-gradient-to-t text-zinc-950 p-6 px-10 text-base font-bold'}>Journal a trade</Button>
        </div>
       <div className=' h-fit px-4 pt-4 overflow-y-hidden flex gap-3'>
          <div className='w-full'>
            <div className='mb-2 flex justify-end'>
              <Calendar23/>
            </div>
            <div className='grid-cols-2 gap-5 grid'>
              <Cardbox2 heading={'Average Risk/Reward ratio'} data={'1 : 1.4'}/>
              <Cardbox2 heading={'Average holding time'} data={'2 hrs'}/>
            </div>
            <div className='mt-4'>
              <ChartPieLabelList />
            </div>
          </div>
          <div className='overflow-y-hidden flex flex-col h-full w-full px-10'>
            <p className=' font-medium font-WixMade tracking-tight text-lg text-start p-3'>My Journal Accounts</p>
            <div className='overflow-y-scroll flex-grow no_scroll'>
              {/* <Link href='trade-account'> */}
              <Cards name={'Flipping Account'} currency={'USD'} broker={'Exness'} percent={50} balance={'500'}/>
              {/* </Link> */}
              <Cards name={'School Fees Account'} percent={14} red currency={'USD'} broker={'AssexMarket'} balance={'3000'}/>
              <Cards name={'Car Maintenance'} currency={'NGN'} broker={'Deriv'} balance={'120000'}/>
              <Cards name={'FoodStuff Account'} currency={'NGN'} broker={'Deriv'} balance={'50000'}/>
              <Cards name={'Investor Account'} currency={'USD'} broker={'Exness'} balance={'150000'}/>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Dashboard



export const Cardbox = ({red}) => {
  return (
      <Card className="@container/card rounded-md bg-white">
        <CardHeader className="relative">
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            45,678
          </CardTitle>
          <div className="absolute right-4 top-4">
            <BadgeVariant red={red}/>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
  )
}
export const Cardbox2 = ({heading,data}) => {
  return (
      <Card className="@container/card rounded-md py-3 justify-between h-fit gap-0 bg-white">
        <CardHeader className=" px-7 gap-0 relative">
          <CardDescription className={'text-sm p-0 text-zinc-900 font-medium'}>{heading}</CardDescription>
          <CardDescription className={'pt-0.5 text-xs'}>January - June 2024</CardDescription>
          <CardTitle className="@[250px]/card:text-2xl font-bold  mt-3 tracking-wider mb-0 text-xl tabular-nums">
            {data}
          </CardTitle>
        </CardHeader>
      </Card>
  )
}

    export const Cards =({name,broker,currency,balance,percent,red})=>{
      const [mail,setMail]= useState(
        {
          name: name,
          broker: broker,
          currency: currency,
          balance: balance,
          date: "09:34 AM",
          duration: "2hrs",
          teaser:
            "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
        },
      )
      return(
            <a
                  href="trade-account"
                  key={mail.email}
                  className="flex flex-col items-start gap-2 whitespace-nowrap border-b px-4 py-7 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <span className="font-semibold text-blue-900 text-base">{mail.name}</span>
                  <div className={`font-semibold flex items-center gap-2`}>
                    {`$${mail.balance}`}<BadgeVariant red={red} percent={percent}/>
                  </div>
                  <div className="flex w-full text-xs items-center justify-start gap-3">
                    <span className="capitalize">broker: <span className='font-semibold'>{mail.broker}</span></span>{"|"}
                    <span className=" text-xs capitalize">Currency: <span className='font-semibold'>{mail.currency}</span></span>                   
                  </div>
                  <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                    {mail.teaser}
                  </span>
                </a>
    
         
      )
    }

export const BadgeVariant = ({red,percent,size}) => {
  return (
      <Badge data-size={size} data-red={red} variant="outline" className="flex gap-1 rounded-lg data-[size=2]:text-xs text-[10px] border-border text-green-500 data-[red]:text-red-500">
        {red?<TrendingDownIcon data-red className=" " />:<TrendingUpIcon/>}
        {red?'-':''}{percent?percent:20}%
      </Badge>

  )
}