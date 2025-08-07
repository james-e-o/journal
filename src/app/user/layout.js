import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div className='overflow-x-hidden h-svh overflow-y-auto bg-green-300'>
      {children}
    </div>
  )
}

export default DashboardLayout
