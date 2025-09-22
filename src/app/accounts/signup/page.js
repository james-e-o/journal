'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Eye, EyeOff,LogIn,MoveLeft,MoveRight, Quote, Rocket, TriangleAlert } from "lucide-react"
import { supabase } from "../../../../config/supabaseClient"
import { isEmpty,isEmail,isLength,matches } from "validator"




const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValidate, setPasswordValidate] = useState('')
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const message = {
    emailError:'valid email address required',
    passwordError :'password must have at least 8 characters that includes at least number',
    validateError :'password does not match',
  }



  function Submit(e){
    e.preventDefault()
    setError(false)
    setErrorMessage('')

   
    if(isEmpty(email) || !isEmail(email)){setError(true),setErrorMessage(message.emailError); return}
    else if(isEmpty(password)||!isLength(password,{min:8})||!matches(password,/[0-9]/)){setError(true),setErrorMessage(message.passwordError); return}
    else if(isEmpty(passwordValidate||!(passwordValidate==password))){setError(true),setErrorMessage(message.validateError); return} else console.log('logged')

    // console.log(businessMail,password,email)

  }
  useEffect(()=>{
    console.log(email)
  },[email])

  return (
  
      <div className="px-5 pb-1 w-7/12 pt-10 flex flex-col justify-start items-center flex-grow">
        <p className=" pb-0 px-5 text-center mt-5 text-base relative font-semibold ">Get Started!</p>

        <div className='rounded-md relative w-full p-1 mt-4'>
          <div className="w-full h-fit relative overflow-hidden ">
               <form method='post' >
                    <Indiv clearErr={()=>setError(false)} value={email} setValue={(data)=>{setEmail(data)}} error ={error && errorMessage==message.emailError && (message.emailError)} type={'text'} name={"email"} placehold={"Email"} />
                    <Indiv clearErr={()=>setError(false)} value={password} setValue={(data)=>{setPassword(data)}} icon={true} error ={error && errorMessage==message.passwordError &&(message.passwordError)} type={'password'} altType={'text'} name={"password"} placehold={"Password"}/> 
                    <Indiv clearErr={()=>setError(false)} value={passwordValidate} setValue={(data)=>{setPasswordValidate(data)}} icon={true} error ={error && errorMessage==message.validateError &&(message.validateError)} type={'password'} altType={'text'} name={"password"} placehold={"re-enter Password"}/> 
                        
                    <Button onClick={Submit} className="text-sm mt-4 font-semibold text-zinc-950 hover:bg-yellow-500 bg-yellow-400 w-full h-10 rounded-[0.4rem]" >Sign up</Button>
                </form>
                <p className="w-full pl-1 mt-1"><Link className="text-gray-500 text-[0.73rem] decoration-none" href={'signin'}>already have an account?  <span className="text-black  text-xs"> Sign in</span></Link></p>
                <div className="items-center mx-1 mt-6 relative w-full px-2 after:absolute after:border-b after:min-w-[20%] after:right-0 after:border-gray-400 after:my-0 before:absolute before:border-b before:min-w-[20%] before:left-0 before:border-gray-400 before:my-0 flex justify-center"><span className="text-gray-800 relative -top-[2px] text-xs">or continue with</span></div>
                <div className="flex justify-center mt-2 gap-3 items-center">
                    <Button className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{google}</Button> 
                    <Button className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{x}</Button> 
                    <Button className="text-sm mt-4 font-medium w-fit cursor-pointer text-gray-500 border-gray-400 rounded-[0.3rem]" variant='outline' >{apple}</Button> 
                </div>
            </div>
        </div>       
        {/* <Link href={'/admin'}><Button variant='ghost' className="hover:bg-transparent p-8 mt-4 bg-amber-300 opacity-80 hover:opacity-100"><TriangleAlert className="text-red-500"/> <span className="text-black">Site is under construction <br /> take a tour</span></Button></Link> */}
      </div>
  )
}

export const Indiv = ({name, value,setValue, placehold, type, error,clearErr,icon, altType}) => {
  const [inputFocus, setInputFocus] = useState(false)
  const [hide, setHide] =useState(true)
  return (
    <div id='inputdiv' className={inputFocus?"my-7 w-full z-0 bg-transparent py-1 px-2 h-fit border-zinc-950 relative border rounded-md ":"my-7 w-full z-0 bg-transparent py-1 px-2 h-fit border-zinc-800 relative border rounded-md"}>
      <p aria-disabled className={inputFocus?"bg-amber-200 inline-block rounded ml-1 absolute text-zinc-700 text-[0.65rem] transition-all -top-2 px-1 py-0 -z-[1]":"bg-transparent inline-block rounded ml-1 absolute text-zinc-700 text-sm transition-all top-3 px-1 py-0 -z-[1]"}>{placehold}</p>
      {/* {icon && inputFocus?<div className="left-[88%] top-2 absolute inline-block z-20" onClick={()=>setHide(!hide)}>{hide?<Eye className='w-4 h-4'/>:<EyeOff className='w-4 h-4'/>}</div>:""} */}
      <input value={value} className="border-none outline-none bg-transparent h-9 top-[0.54rem] w-full z-20 pl-1" name={name} onInput={(e)=>{e.preventDefault(),setValue(e.target.value),clearErr}} onFocus={(e)=>{e.preventDefault(); setInputFocus(true)}} onBlur={(e)=>{ if (e.target.value.length===0) {setInputFocus(false); if(!hide)setHide(!hide)} else {setInputFocus(true)}}} type={!hide?altType:type}/>
      <p className='absolute text-red-500 font-extralight leading-[1] italic top-12 text-[9px]'>{error}</p>
    </div>
  )
}

export default SignUp

export const google = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="17px" height="17px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>

export const x = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="22px" height="22px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>

export const apple = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="52px" height="52px"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/></svg>