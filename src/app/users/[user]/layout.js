'use client'
import {SidebarInset,SidebarProvider,SidebarTrigger,} from "@/components/ui/sidebar"
import { BrowserClient } from '../../../../config/browserClient'
import React,{useState,createContext, useEffect} from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { Spinner } from '@/components/ui/spinner'

export const DataContext = createContext()

export default function Page({children}) {

  const router = useRouter()
  const params = useParams()
  const supabase = BrowserClient
  const [data,setData] = useState({
    weeksHeight:'',
    weekHeight:'',
  })
  const [isLoading,setIsLoading] = useState(true)


  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      // If no session, redirect to sign-in
      if (!session) {
        router.replace('/accounts/signin')
        return
      }

      // If logged-in user does not match the URL param
      if (session.user.id !== params.user) {
        router.replace(`/users/${session.user.id}`)
        return
      }

      setIsLoading(false)
    }

    checkUser()
  }, [params.user, router, supabase])

  if (isLoading) return  <div className='overflow-hidden flex justify-center items-center h-full'>
      <Spinner className={'size-8 text-amber-400'} spinning={true}/>
    </div>


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



