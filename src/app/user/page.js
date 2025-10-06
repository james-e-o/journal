'use client'
import Header from '@/components/dashboard-header'
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
import { TabsContent } from '@/components/ui/tabs';



const UserMain = () => {
  return (
    <div className='px-4'>
      <Header>
        <Calendar23/>
      </Header>
      <div className='flex flex-col gap-4 mt-2'>
        <ChartPieLabelList/>
      </div>

    </div>
  )
}

export default UserMain
