'use client'
import {SidebarInset,SidebarProvider,SidebarTrigger,} from "@/components/ui/sidebar"
import React,{useState,createContext, useEffect} from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { Spinner } from '@/components/ui/spinner'
import { supabase } from "../../../../config/supabaseClient"

export const DataContext = createContext()

export default function Page({children}) {

  const router = useRouter()
  const params = useParams()
  const [data,setData] = useState({
    weeksHeight:'',
    weekHeight:'',
    profile:null
  })
  const [isLoading,setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function checkUser() {

       const { data: { user } } =  await supabase.auth.getUser()
        
            if (!user) {
                setIsLoading(false)
                router.push('/accounts/signin')
            }

            const userID = user?.id

      const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userID)
            .single()

            console.log(data)

            if (!profile || profileError) {
                 setData(prev=>({...prev,profile:null}))
                alert('No profile found for this user, try reoading this page')
                setIsLoading(false)
                router.push('/accounts/signin')
            }
            
            console.log(user,profile)
            
            
            // Compare the logged-in user's handle to the route param
            if (params.user !== profile.handle) {
                console.warn(`Unauthorized access attempt by ${profile.handle}`)
                setIsLoading(false)
                router.push(`/users/${profile.handle}`) // redirect them to *their own* admin page
            }

            setData(prev=>({...prev,profile}))
            setIsLoading(false)
    }

    checkUser()
  }, [params.user, router, supabase])

  if (isLoading) return  <div className='overflow-hidden flex justify-center items-center h-full'>
      <Spinner className={'size-8 text-amber-400'} spinning={true}/>
    </div>


  return (
    <SidebarProvider  className={'relative'}>
      <AppSidebar data={data.profile} id={data.profile&&data.profile.id} />
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



