'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Indiv,google,x ,apple} from "../signup/page"
import { useState } from "react"
import { Eye, EyeOff,LogIn,MoveLeft,MoveRight, Quote, Rocket } from "lucide-react"


const SignUp = () => {
  const validEmail = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const [carousel,setCarousel]=useState(false)
  const [data, setData] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValidate, setPasswordValidate] = useState('')
  const [error, setError] = useState({item:'',message:''})

  function Submit(e){
    e.preventDefault()
    if(!email||!email.match(validEmail)){setError({item:'email',message:'valid email address required'}); return}
    else if(!password){setError({item:'password',message:'required'}); return}
    else if(passwordValidate !== password){setError({item:'passwordvalidate',message:'does not match password'}); return}

  }

  return (
   
      <div className="px-5 pb-1 pt-10 flex flex-col justify-start items-center flex-grow">
        <p className=" pb-0 px-5  mt-16 text-center text-zinc-900 text-base relative font-semibold ">Welcome back!</p>

        <div className='rounded-md relative w-full p-1 mt-4'>
            <div className="w-full h-fit relative overflow-hidden ">
            <form method='post' >
              <Indiv  error ={data && data.emailError} type={'text'} name={"email"} placehold={"Email"} />
              <Indiv icon={true} error ={data && (data.passwordError || data.passwordError2)} type={'password'} altType={'text'} name={"password"} placehold={"Password"}/> 
              <div className='w-full mb-5 flex justify-between mt-2'> 
                <p className="text-[0.73rem] px-1 flex items-center gap-1">
                  <input type="checkbox" className="border-black text-blue-400 border outline-2" name="remember" id="remember" />
                  <label htmlFor="remember" className="text-gray-500">Remember me</label>
                </p>
                <Link className='text-gray-500 text-[0.73rem]' href={'/makeup'}>forgot details?<span></span></Link>
              </div>    
              <Link href={'signup'}  className="decoration-none text-primary"><Button className="text-sm bg-yellow-400 h-10 hover:bg-yellow-500 text-zinc-950 font-semibold w-full p rounded-[0.4rem]" >Sign in(view)</Button></Link>
            </form>
            <p className="w-full pl-1 mt-2"><Link className="text-zinc-600 text-[0.73rem] decoration-none" href={'signup'}>not signed?  <span className="text-zinc-900 text-xs">  Create account</span></Link></p>
            <div className="items-center mx-1 mt-8 relative w-full px-2 after:absolute after:border-b after:min-w-[25%] after:right-0 after:border-gray-400 after:my-0 before:absolute before:border-b before:min-w-[25%] before:left-0 before:border-gray-400 before:my-0 flex justify-center"><span className="text-gray-800 relative -top-[2px] text-xs">or continue with</span></div>
            <div className="flex justify-center mt-2 gap-3 items-center">
                <Button className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{google}</Button> 
                <Button className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{x}</Button> 
                <Button className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{apple}</Button> 
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignUp