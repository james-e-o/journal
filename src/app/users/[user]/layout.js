'use client'
import React,{useState,createContext} from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export const DataContext = createContext()

export default function Page({children}) {
  const [data,setData] = useState({
    weeksHeight:'',
    weekHeight:'',
  })
 
  return (
    <SidebarProvider  className={'relative'}>
      <AppSidebar  />
      <SidebarInset className={' overflow-hidden h-svh static'}>
        <div className="flex mb-0.5 h-full overflow-hidden flex-col gap-4">
           <DataContext.Provider value={{data,setData}}>
            {children}
           </DataContext.Provider>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



