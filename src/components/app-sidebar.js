"use client"

import  React from "react"
import { ArrowBigDownDash, AudioWaveform, BookOpen, Bot, Calculator, ChartCandlestick, Command, FileChartLine, Files, Frame, GalleryVerticalEnd, LayoutDashboard, Map, Notebook, PieChart, Plus, Settings2, SquareTerminal,} from "lucide-react"
import { Button,buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Avatar,  AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { NavUser } from "@/components/nav-user"
import {  Sidebar,  SidebarContent,  SidebarFooter,  SidebarHeader,SidebarTrigger,  SidebarRail,} from "@/components/ui/sidebar"
import { ChevronRight,  } from "lucide-react"
import {  Collapsible,  CollapsibleContent,  CollapsibleTrigger,} from "@/components/ui/collapsible"
import {  SidebarGroup,  SidebarGroupLabel,  SidebarMenu,  SidebarMenuButton,  SidebarMenuItem,  SidebarMenuSub,  SidebarMenuSubButton,  SidebarMenuSubItem,} from "@/components/ui/sidebar"


import { useIsMobile } from "@/hooks/use-mobile";

export function AppSidebar({ data,id,...props }) {
  const isMobile = useIsMobile()
  const params = useParams()

  return (
    <Sidebar  className={'bg-zinc-900'} collapsible="icon" {...props}>
      <SidebarHeader className={'bg-zinc-950 text-amber-400'} >
        <div className="flex pt-5 md:pt-8 justify-center">
            <Image className="dark:invert scale-75 md:scale-100 " src="/rayani3.png" alt="logo" width={50} height={50} priority />
        </div>
      </SidebarHeader>
      <SidebarContent className={'bg-zinc-950 pt-10 text-zinc-100'} >
        <SidebarGroup>
            <SidebarMenuButton tooltip={'Journal a trade'} size="lg" className="data-[state=open]:bg-core hover:bg-core cursor-pointer bg-core data-[state=open]:text-black">
                <div className="bg-core scale-125 text-black flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Plus className="size-5 text-black font-bold" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate text-black font-medium">Journal a Trade</span>
                </div>
            </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarMenu>
                <NoCollapsibleButton tooltip={'Dashboard'} className={``} url={`/users/${params.user}`} title={'My Models'} icon={LayoutDashboard} active={false} name={'Dashboard'}/>
                <NoCollapsibleButton tooltip={'Accounts'} className={``} url={`/users/${params.user}/accounts`} title={'My Models'} icon={Files} active={false} name={'Accounts'}/>
                <NoCollapsibleButton tooltip={'Trades'} className={``} url={`/users/${params.user}/trades`} title={'Trades'} icon={FileChartLine} active={false} name={'Trades'}/>
                <NoCollapsibleButton tooltip={'Journals'} className={``} url={`/users/${params.user}/journals`} title={'Journals'} icon={Notebook} active={false} name={'Journals'}/>
                <NoCollapsibleButton tooltip={'Charts'} className={``} url={`/users/${params.user}/charts`} title={'My Models'} icon={ChartCandlestick} active={false} name={'Charts'}/>
                <NoCollapsibleButton tooltip={'Calculator'} className={``} url={`/users/${params.user}/position-size-calculator`} title={'Lot size Calculator'} icon={Calculator} active={false} name={'Calculator'}/>
                <CollapsibleButton className={``} title={'Resource centre'} icon={SquareTerminal} items={[
                    {title:'Guides',url:'#'},
                    {title:'Docs',url:'#'},
                    {title:'Help',url:'#'},
                ]}/>
               
            </SidebarMenu>
        </SidebarGroup>
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter className={'bg-zinc-950 text-amber-400'} >
        <NavUser user={data} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

const CollapsibleButton = ({title,icon,items,sidebarCollapse }) => {
   const item ={icon}
  return (
    <Collapsible key={title} asChild defaultOpen={false} className="group/collapsible my-0.5" >
        <SidebarMenuItem>
            <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={title}>
                 {item.icon && <item.icon className='font-bold' />}
                <span className="font-medium text-xs ml-1">{title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
            <SidebarMenuSub>
                {items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton className={`text-white text-xs`} asChild>
                    <Link href={subItem.url}>
                        <span className="font-medium text-xs ml-1">{subItem.title}</span>
                    </Link>
                    </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                ))}
            </SidebarMenuSub>
            </CollapsibleContent>
        </SidebarMenuItem>
    </Collapsible>
  )
}

const NoCollapsibleButton = ({name,active,url,icon,tooltip }) => {
    const item ={icon}
  return (
    <SidebarMenuItem mobileCollapse={true}  key={name} className={'my-0.5'}>
        <SidebarMenuButton tooltip={tooltip} asChild isActive={active}>
            <Link href={url}>
                {item.icon && <item.icon className='font-bold' />}
                <span className="font-medium text-xs ml-1">{name}</span>
            </Link>
        </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
