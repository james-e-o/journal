import React from 'react'

const ForgotDetailsLayout = ({children}) => {
  return (
    <div className=' flex-grow flex-col items-center flex w-full p-5'>
        <p className=" pb-0 px-5  mt-10 text-start text-zinc-900 text-sm relative font-normal ">Password Reset</p>
        {children}
    </div>
  )
}

export default ForgotDetailsLayout
