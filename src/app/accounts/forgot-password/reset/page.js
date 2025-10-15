'use client'
import React, {useState} from 'react'
import { Indiv } from '../../signup/page'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [passwordValidate, setPasswordValidate] = useState('')
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const message = {
        passwordError :'password must have at least 8 characters that includes at least number',
        validateError :'password does not match',
    }


  return (
    <div className='px-5 pb-1 w-10/12 md:w-8/12 flex flex-col gap-0 justify-start items-start flex-grow'>
        <p className=" pb-0 mt-10 text-start text-zinc-900 text-xs relative font-bold ">New Password</p>
        <div className='w-full'>
            <Indiv clearErr={()=>setError(false)} value={password} setValue={(data)=>{setPassword(data)}} icon={true} error ={error && errorMessage==message.passwordError &&(message.passwordError)} type={'password'} altType={'text'} name={"password"} placehold={"New Password"}/> 
            <Indiv clearErr={()=>setError(false)} value={passwordValidate} setValue={(data)=>{setPasswordValidate(data)}} icon={true} error ={error && errorMessage==message.validateError &&(message.validateError)} type={'password'} altType={'text'} name={"password"} placehold={"re-enter New Password"}/> 
        </div>
        </div>
  )
}

export default ResetPassword
