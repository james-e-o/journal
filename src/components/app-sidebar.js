"use client"

import  React from "react"
import { ArrowBigDownDash, AudioWaveform, BookOpen, Bot, Calculator, ChartCandlestick, Command, FileChartLine, Frame, GalleryVerticalEnd, LayoutDashboard, Map, PieChart, Plus, Settings2, SquareTerminal,} from "lucide-react"
import { Button,buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Avatar,  AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {  Sidebar,  SidebarContent,  SidebarFooter,  SidebarHeader,SidebarTrigger,  SidebarRail,} from "@/components/ui/sidebar"
import { ChevronRight,  } from "lucide-react"
import {  Collapsible,  CollapsibleContent,  CollapsibleTrigger,} from "@/components/ui/collapsible"
import {  SidebarGroup,  SidebarGroupLabel,  SidebarMenu,  SidebarMenuButton,  SidebarMenuItem,  SidebarMenuSub,  SidebarMenuSubButton,  SidebarMenuSubItem,} from "@/components/ui/sidebar"


import { useIsMobile } from "@/hooks/use-mobile";

// This is sample data.
const data = {
  user: {
    name: "user name",
    email: "m@example.com",
    avatar: "/dummy.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }) {
   const isMobile = useIsMobile()

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
                <NoCollapsibleButton className={``} url={'/user'} title={'My Models'} icon={LayoutDashboard} active={false} name={'Dashboard'}/>
                <NoCollapsibleButton className={``} url={'/user/accounts'} title={'My Models'} icon={FileChartLine} active={false} name={'Accounts'}/>
                <NoCollapsibleButton className={``} url={'/user/trades'} title={'Trades'} icon={FileChartLine} active={false} name={'Trades'}/>
                <NoCollapsibleButton className={``} url={'/user/journals'} title={'Journals'} icon={FileChartLine} active={false} name={'Journals'}/>
                <NoCollapsibleButton className={``} url={'#'} title={'My Models'} icon={ChartCandlestick} active={false} name={'Charts'}/>
                <NoCollapsibleButton className={``} url={'/user/position-size-calculator'} title={'Lot size Calculator'} icon={Calculator} active={false} name={'Calculator'}/>
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
        <NavUser user={data.user} />
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

const NoCollapsibleButton = ({name,active,url,icon }) => {
    const item ={icon}
  return (
    <SidebarMenuItem mobileCollapse={true}  key={name} className={'my-0.5'}>
        <SidebarMenuButton asChild isActive={active}>
            <Link href={url}>
                {item.icon && <item.icon className='font-bold' />}
                <span className="font-medium text-xs ml-1">{name}</span>
            </Link>
        </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
