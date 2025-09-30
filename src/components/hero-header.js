import React , {useState,useEffect}from 'react'
import Link from 'next/link'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button'

const LandingHeader = () => {
      const [dropState, setDropState] = useState(false)
       useEffect(()=>{
         document.onpointerdown = ({target}) => {
           if(dropState&&target.closest('div#drop-box'))return
           else if(dropState) {
             setDropState(!dropState)
           }
         }
        //  document.onscroll = ({target}) => {
        //    if(dropState&&target.closest('div#drop-box'))return
        //    else if(dropState) {
        //      setDropState(!dropState)
        //    }
        //  }
       })
  return (
    <div className='sticky top-0'>
         <div onScroll={(e)=>{dropState?setDropState(false):''}} id='drop-box' className={dropState?'absolute bg-gradient-to-bl from-amber-400 to-yellow-700  font-Inter font-medium text-lg p-16  w-full top-0 z-30 pointer-events-auto right-0 h-[26rem] transition-[_opacity_150ms_ease-in-out_,_top_150ms_ease-in_]':"absolute font-Inter font-medium text-lg p-16 bg-white opacity-0 left-0 -top-1/2 w-full pointer-events-none -z-50 transition-[_opacity_100ms_ease-in-out_,_top_150ms_ease-in_]"}>
               <div className='flex relative justify-end'><XIcon onClick={()=>setDropState(false)} className="h-9 relative -top-10 -right-7 w-9 p-1"/></div>
               <Link href={'/pricing'} className="decoration-none text-primary"><p className='mb-2 mt-6'>Pricing</p></Link>
               <Link href={'/about'} className="decoration-none text-primary"><p className='mb-3 p-1'>About</p></Link>
               <Link href={'/faqs'} className="decoration-none text-primary"><p className='mb-3 p-1'>FAQs</p></Link>
               <Link href={'/login'} className="decoration-none mx-auto mt-4 text-primary"><Button size='sm' className="rounded-lg px-8 font-Montserrat relative flex justify-center items-center mt-5 py-6 text-base bg-gradient-to-r from-gradient1 to-gradient2"><span>Sign in</span>
               </Button></Link>
          </div>
          <header className=" pl-7 pr-5 backdrop-blur-md border-b border-border items-center sticky top-0 flex justify-between md:px-10 ">
               <Link href={'/'}  className={"z-40 decoration-none font-bold text-black"}><h1 className="font-Madetommy py-3 md:text-2xl text-xl">nexShelf</h1></Link>
               <nav className="flex items-center text-base h-max md:gap-9 gap-3">
                    <div className=" gap-5 hidden md:flex">
                         <Link href={'/pricing'} className="decoration-none active:bg-[#fafafa] text-primary pr-5 cursor-pointer py-1 hidden md:block border-r h-full"><p className=''>Pricing</p></Link>
                         <Link href={'/about'} className="decoration-none active:bg-[#fafafa] text-primary pr-5 cursor-pointer py-1 hidden md:block border-r h-full"><p className=''>About</p></Link>
                         <Link href={'/faqs'} className="decoration-none active:bg-[#fafafa] text-primary pr-5 cursor-pointer py-1 hidden md:block border-r h-full"><p className=''>FAQs</p></Link>
                    </div>
               
                    <Link href={'/login'} className="decoration-none md:hidden"><Button size='sm' variant='outline' className=' md:text-base border-core_polish md:px-4 md:py-4 decoration-none flex items-center justify-center text-black px-3 py-0'><span>Log in</span></Button></Link>
                    <div className=" md:ml-3 md:pl-0 h-full pl-3 ">
                         <Link href={'/login'} className="decoration-none hidden md:inline "><Button size='xs'  variant='outline' className=' md:text-sm h-7 border-violet-500 border-2 md:px-4 rounded-3xl md:py-4 decoration-none flex items-center justify-center px-3 py-0'><span>Log in</span></Button></Link>
                         <Button size='sm' variant='ghost' onClick={()=>setDropState(!dropState)} className='border-white md:hidden flex items-center justify-center border px-2 py-0'><span className="fill-black scale-125">{menuX}</span></Button>
                    </div>
               </nav>
          </header>
    </div>
  )
}

export default LandingHeader


export const menuX = <svg data-name="Layer 1" className="w-5 h-5" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
