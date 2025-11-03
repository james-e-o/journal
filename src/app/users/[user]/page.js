'use client'
import { useRouter,useParams } from 'next/navigation'
import { useContext } from 'react'
import { DataContext } from './layout'
import Dashboard from '@/components/main-dashboard'

export default function UserPage() {
    const router = useRouter()
    const params = useParams()
    const {data,setData} = useContext(DataContext)

  return <Dashboard />
}
