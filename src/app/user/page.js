import { Calendar04 } from '@/components/calendars'
import React from 'react'

const Dashboard = () => {
  return (
    <div className=' flex h-full'>
        <div className='md:w-20 bg-green-800'></div>
        <div className=' bg-gray-600 flex-grow flex-col flex'>
            <header className='h-16 bg-amber-500'>

            </header>
            <main className=' bg-blue-600 flex-grow flex'>
                <div className='w-full'></div>
                <div className='bg-white md  w-[25%]'>
                    <Calendar04 />
                </div>
            </main>
        </div>
      
    </div>
  )
}

export default Dashboard
