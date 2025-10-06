'use client'
import React, {useState,useEffect} from 'react'

const AccountInfo = () => {
  return (
    <div className=' font-WixMade p-2'>
      <p className='tracking-tight text-start  text-base font-semibold mt-2'>Account Info</p>
      <div className=''>
        <p className='tracking-tight text-start text-xs font-semibold mt-2'>Account Details</p>
        <div className='text-xs ml-3 mt-2 '>
          <p className='mt-1'><span className='font-medium '>Account Name:</span></p>
          <p className='mt-1'><span className='font-medium '>Account Type:</span></p>
          <p className='mt-1'><span className='font-medium '>Broker:</span></p>
          <p className='mt-1'><span className='font-medium '>Currency:</span></p>
          <p className='mt-1'><span className='font-medium '>Initial/Starting Balance:</span></p>
          <p className='mt-1'><span className='font-medium '>Current Balance:</span></p>
          <p className='mt-1'><span className='font-medium '>Leverage:</span></p>
        </div>
      </div>
      <div className=''>
        <p className='tracking-tight text-start text-xs font-semibold mt-2'>Account Goals</p>
        <div className='text-xs ml-3 mt-2 '>
          <p className='mt-1'><span className='font-medium '>Risk/Reward Target per Trade:</span></p>
          <p className='mt-1'><span className='font-medium '>Monthly Target:</span></p>
        </div>
      </div>
      <div className=''>
        <p className='tracking-tight text-start text-xs font-semibold mt-2'>Account Rules</p>
        <div className='text-xs ml-3 mt-2 '>
          <p className='mt-1'><span className='font-medium '>Max. Daily Drawdown:</span></p>
          <p className='mt-1'><span className='font-medium '>Max. Weekly Drawdown:</span></p>
          <p className='mt-1'><span className='font-medium '>Max. Trade per Day:</span></p>
          <p className='mt-1'><span className='font-medium '>% Risk per Trade:</span></p>
          <p className='mt-1'><span className='font-medium '>Max. Open positions:</span></p>
          <p className='mt-1'><span className='font-medium '>Max. Lot Size:</span></p>
          <p className='mt-1'><span className='font-medium '>Trading Sessions:</span></p>
        </div>
      </div>
      <div>
        <p className='tracking-tight text-start text-xs font-semibold mt-3'>Investors/Accountability Partners</p>

      </div>
    </div>
  )
}

export default AccountInfo
