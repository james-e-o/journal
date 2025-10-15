'use client'
import React, { useState } from 'react'
import { Indiv } from '../signup/page'
import { isEmail } from 'validator'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '../../../../config/supabaseClient'
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"
import Router from 'next/router'

const ForgotDetails = () => {
    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const message = {
        emailError:'valid email address required',
    }


    async function Submit(e){
    e.preventDefault()
    setError(false)
    setErrorMessage('')
    
    
    if(isEmpty(email) || !isEmail(email)){setError(true),setErrorMessage(message.emailError); return}
    else {
      
        setIsLoading(true)
        try {
          // Network call to Supabase
          let { data, error } = await supabase.auth.resetPasswordForEmail(email)

          if (error) {
            // Supabase reached, but login failed (wrong credentials, etc.)
            setIsLoading(false)
            toast(error)
            setError(true)
            console.log("Supabase auth error:", error)
            return
          }

          if (data?.user) {
            setIsLoading(false)
            console.log("User logged in:", data.user)
            // router.push("/dashboard") or similar
          }

        } catch (err) {
          // Request itself failed (network issue, CORS, etc.)
          setIsLoading(false)
          setError(true)
          toast("Network error, Retry")
          console.log("Network or unexpected error:", err)
        }
    }
  }

  return (
    <div className='px-5 pb-1 w-10/12 md:w-8/12 flex flex-col justify-start items-start flex-grow'>
      <div className='w-full'>
        
        <Indiv clearErr={()=>setError(false)} value={email} setValue={(data)=>{setEmail(data)}} error ={error && errorMessage==message.emailError && (message.emailError)} type={'text'} name={"email"} placehold={"Email"} />
        <Button onClick={Submit} className="text-sm bg-yellow-400 h-10 hover:bg-yellow-500 text-zinc-950 font-semibold w-fit p rounded-[0.4rem]">{isLoading&&<Spinner spinning={isLoading}/>}Confirm Email</Button>
        <div className='mt-12'>
            <Link href={'signin'}><Button variant={'ghost'} className={'mt-1 underline'}><ArrowLeft/>Back to Sign in</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotDetails
