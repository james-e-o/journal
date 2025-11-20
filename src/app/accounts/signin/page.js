'use client'

import CryptoJS from "crypto-js"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Indiv,google,x ,apple} from "../signup/page"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { useState,useEffect } from "react"
import { Eye, EyeOff,LogIn,MoveLeft,MoveRight, Quote, Rocket ,Check} from "lucide-react"
import { isEmpty,isEmail,isLength,matches, } from "validator"
import { supabase } from "../../../../config/supabaseClient"
import { Spinner } from "@/components/ui/spinner"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/custom-toast"


// export function encodeID (item){
//   const key = process.env.NEXT_PUBLIC_SECRET_KEY // ⚠️ note: public if used in client
//   return CryptoJS.HmacSHA256(String(item), key).toString(CryptoJS.enc.Hex)
// }

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [dialogOpen,setDialogOpen] = useState(false)
  const [attempt,setAttempt] = useState(0)
  const message = {
    emailError:'valid email address required',
    passwordError :'password cannot be empty',
    passwordError2 :'incorrect email or password'
  }
  
 
  const toast = useToast();
  const router = useRouter()

  async function Submit(e){
    e.preventDefault()
    setError(false)
    setErrorMessage('')
    
    
    if(isEmpty(email) || !isEmail(email)){setError(true),setErrorMessage(message.emailError); return}
    else if(isEmpty(password)){setError(true),setErrorMessage(message.passwordError); return}
    else {
      
        setIsLoading(true)
        try {
        
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          })

          if (error) {
            setIsLoading(false)
            setError(true)
            alert(error.message);
            return;
          }

          if (data.session) {
            // ✅ session created and stored automatically
            const userId = data.user.id;
            
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('handle')
              .eq('id', userId)
              .single()

            if (profileError || !profile) {
              console.error('Profile fetch error:', profileError)
              alert('Profile not found. Please sign in again.')
              setIsLoading(false)
              return
            }

               // ✅ Step 3: Profile is complete → go to dashboard
              router.push(`/users/${profile.handle}`);
              setIsLoading(false)
        
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

   useEffect(() => {
      const url = new URL(window.location.href);
      const isConfirmed = url.searchParams.get('confirmed');
      
      if (isConfirmed) {
        setEmail(isConfirmed)
        setDialogOpen(true)
        // Clean up the URL so it doesn't repeat on reload
        router.replace('/accounts/signin');
      }
    }, []);
  
  return (
      <Dialog setDialogOpen={setDialogOpen} dialogOpen={dialogOpen}>
   
      <div className="px-5 pb-1 w-10/12 md:w-9/12 pt-14 flex flex-col justify-start items-center flex-grow">
        <p className=" pb-0 px-5  mt-5 text-center text-zinc-900 text-base relative font-semibold ">Welcome back!</p>

        <div className='rounded-md relative w-full p-1 mt-4'>
            <div className="w-full h-fit relative overflow-hidden ">
            <form method='post' >
              <Indiv clearErr={()=>setError(false)} value={email} setValue={(data)=>{setEmail(data)}} error ={error && errorMessage==message.emailError && (message.emailError)} type={'text'} name={"email"} placehold={"Email"} />
              <Indiv clearErr={()=>setError(false)} value={password} setValue={(data)=>{setPassword(data)}} icon={true} error ={(error && errorMessage==message.passwordError &&(message.passwordError) || (error && errorMessage==message.passwordError2&&message.passwordError2))} type={'password'} altType={'text'} name={"password"} placehold={"Password"}/> 
              <div className='w-full mb-5 flex justify-between mt-2'> 
                <p className="text-[0.73rem] px-1 flex items-center gap-1">
                  <input type="checkbox" className="border-black text-blue-400 border outline-2" name="remember" id="remember" />
                  <label htmlFor="remember" className="text-gray-500">Remember me</label>
                </p>
                <Link className='text-gray-500 text-[0.73rem]' href={'forgot-password'}>forgot details?<span></span></Link>
              </div>    
              <Button disabled={isLoading} onClick={Submit} className="text-sm cursor-pointer bg-yellow-400 h-10 hover:bg-yellow-500 text-zinc-950 font-semibold w-full p rounded-[0.4rem]" >{isLoading&&<Spinner spinning={isLoading}/>}Sign in</Button>
            </form>
            <p className="w-full pl-1 mt-2"><Link className="text-zinc-600 text-[0.73rem] decoration-none" href={'signup'}>not signed?  <span className="text-zinc-900 text-xs">  Create account</span></Link></p>
            <div className="items-center mx-1 mt-8 relative w-full px-2 after:absolute after:border-b after:min-w-[20%] after:right-0 after:border-gray-400 after:my-0 before:absolute before:border-b before:min-w-[20%] before:left-0 before:border-gray-400 before:my-0 flex justify-center"><span className="text-gray-800 relative -top-[2px] text-xs">or continue with</span></div>
            <div className="flex justify-center mt-2 gap-4 items-center">
                <Button disabled={true} className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{google}</Button> 
                <Button disabled={true} className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{x}</Button> 
                <Button disabled={true} className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{apple}</Button> 
            </div>
          </div>
        </div>
      </div>
          <DialogContent className={''}>
              <DialogHeader>
                <DialogTitle>Email Confirmed <Check className="text-army inline"/></DialogTitle>
                <DialogDescription className={'text-neutral-700'}>
                  Your email <span className="text-core">{email}</span> has been confirmed, continue to login.
                </DialogDescription>
              </DialogHeader>
          </DialogContent>
      </Dialog>
  )
}

export default SignIn

