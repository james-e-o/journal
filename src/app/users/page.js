"use client"
import { useEffect } from "react"
import { supabase } from "../../../config/supabaseClient"
import { Spinner } from "@/components/ui/spinner"
import { redirect } from "next/navigation"



const Users = () => {
    const confirmSession = async () => {

        try {
            
            const {data: {session}} = await supabase.auth.getSession()
            
            if (!session) {
              redirect(`/accounts/signin`)
            }    else    if (session) {
              redirect(`/users/${session.user.id}`);
            }
                      

        } catch (err) {
          
            console.log("Network or unexpected error:", err)
        }
    }

    useEffect(()=>{
      confirmSession()
    },[])
  return (
    <div className='overflow-hidden flex justify-center items-center h-full'>
      <Spinner className={'size-8 text-amber-400'} spinning={true}/>
    </div>
  )
}

export default Users
