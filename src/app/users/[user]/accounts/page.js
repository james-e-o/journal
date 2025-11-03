'use client'
import Header from '@/components/dashboard-header'
import { FileSearch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useParams,useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const TradeAccounts = () => {
  const [accounts,setAccounts] = useState(true)

  const router = useRouter()
  const params = useParams()

  return (
    <div className=''>
        <Header />
        <div className='md:px-5 px-3'>
          <div className='flex mb-1 items-center py-2 justify-between'>
            {accounts&& <>
              <p className='font-medium '>Trade Accounts</p>
              <Link href={'/user/accounts/new-account'}><Button className={'cursor-pointer h-8 mt-2 text-black bg-core hover:bg-core/80"'}><Plus/>New account</Button></Link>
            </>} 
          </div>
          <div className=''>
             {accounts? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href={'/user/accounts/trade-account'}><TradeAccountCard
                      name="ICMarkets Main"broker="ICMarkets"platform="MT5"type="Live"balance={10245.8}equity={10180.32}profitLoss={245.8}winRate={61}totalTrades={52}currency="$"lastUpdated="Oct 5, 2025" /></Link>
                  <Link href={'/user/accounts/trade-account'}><TradeAccountCard
                      name="FTMO Challenge"broker="FTMO"platform="MT4"type="Challenge"balance={4990}equity={4975}profitLoss={-15}winRate={54}totalTrades={38}currency="$"lastUpdated="Oct 4, 2025"/></Link>
                  <Link href={'/user/accounts/trade-account'}><TradeAccountCard name="OANDA Practice" broker="OANDA"    platform="MT5" type="Demo" balance={4850.25} equity={4820.40} profitLoss={-29.85} winRate={57} totalTrades={34} currency="$" lastUpdated="Oct 5, 2025"/></Link>

                  {/* Funded Account Example */}
                  <Link href={'/user/accounts/trade-account'}><TradeAccountCard name="MyFundedFX Account" broker="MyFundedFX" platform="MT4" type="Funded" balance={50235.70} equity={50480.20} profitLoss={245.50} winRate={68} totalTrades={123} currency="$" lastUpdated="Oct 5, 2025"/></Link>

              </div>
              
              :

              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <div className="flex flex-col items-center gap-4">
                  {/* Icon with subtle animation */}
                  <div className="p-4 rounded-full bg-muted">
                    <FileSearch className="w-10 h-10 text-muted-foreground" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-medium text-muted-foreground">
                      No Trade account yet created
                    </h3>
                  </div>

                  {/* Button */}
                  <Link href={`/users/${params.user}/accounts/new-account`}><Button  className="mt-2 text-black bg-core hover:bg-core/80">
                    Create account
                  </Button></Link>
                </div>
              </div>
              }
          </div>
        </div>
    </div>
  )
}

export default TradeAccounts




export function TradeAccountCard({name,broker,platform,type,balance,equity,profitLoss,winRate,totalTrades,currency,lastUpdated,}) {
  const typeColor =
    type === 'Live'
      ? 'bg-green-100 text-green-700'
      : type === 'Demo'
      ? 'bg-blue-100 text-blue-700'
      : type === 'Challenge'
      ? 'bg-yellow-100 text-yellow-700'
      : type === 'Funded'
      ? 'bg-purple-100 text-purple-700'
      : 'bg-gray-100 text-gray-700'

  const profitColor = profitLoss >= 0 ? 'text-green-600' : 'text-red-600'

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">{name}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {broker} • {platform}
          </p>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded ${typeColor}`}>{type}</span>
      </div>

      {/* Main Stats */}
      <div className="flex justify-between items-end mt-3 mb-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Balance</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {currency}
            {balance.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Equity</p>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {currency}
            {equity.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">P/L</p>
          <p className={`text-sm font-medium ${profitColor}`}>
            {profitLoss >= 0 ? '+' : ''}
            {profitLoss.toLocaleString()} {currency}
          </p>
        </div>
      </div>

      {/* Compact Info Row */}
      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3">
        <span>
          Win Rate:{' '}
          <span className="font-medium text-gray-700 dark:text-gray-200">{winRate}%</span>
        </span>
        <span>
          Trades:{' '}
          <span className="font-medium text-gray-700 dark:text-gray-200">{totalTrades}</span>
        </span>
        {lastUpdated && (
          <span>
            Updated:{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">{lastUpdated}</span>
          </span>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-3 space-x-3">
        <button className="text-sm font-medium text-amber-600 hover:text-amber-700">
          View Journal
        </button>
        <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          More
        </button>
      </div>
    </div>
  )
}