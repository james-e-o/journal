'use client'
import {useEffect, useState} from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ComboDropTemplate } from '../../accounts/new-account/page';
import { Button,buttonVariants } from '@/components/ui/button';
import { el } from 'date-fns/locale';


const currencyPairs = [
  'AUDCAD','AUDCHF','AUDJPY','AUDNZD',
  'AUDSGD','AUDUSD','CADCHF','CADJPY',
  'CHFJPY','CHFSGD','EURAUD','EURCHF',
  'EURCZK','EURGBP','EURHUF','EURJPY',
  'EURMXN','EURNOK','EURNZD','EURPLN',
  'EURSEK','EURTRY','EURUSD','EURZAR',
  'GBPAUD','GBPCAD','GBPCHF','GBPJPY',
  'GBPMXN','GBPNOK','GBPNZD','GBPSEK',
  'GBPSGD','GBPTRY','GBPUSD','NOKJPY',
  'NOKSEK','NZDCAD','NZDCHF','NZDJPY',
  'NZDUSD','SEKJPY','SGDJPY','USDCAD',
  'USDCHF','USDCNH','USDCZK','USDHUF',
  'USDJPY','USDMXN','USDNGN','USDNOK','USDPLN',
  'USDRUB','USDSEK','USDSGD','USDTHB',
  'USDTRY','XAGAUD','XAGEUR','XAGUSD',
  'XAUAUD','XAUCHF','XAUEUR','XAUGBP',
  'XAUJPY','XAUUSD','XPDUSD','XPTUSD',
  'ZARJPY'
]

const currency = ['USD','AUD','CAD','CHF','EUR','GBP','JPY','NGN','NZD','ZAR']

const RiskCalculator = () => {
  
  const [accountBalance,setAccountBalance] = useState('')
  const [riskAmount,setRiskAmount] = useState('')
  const [riskPercentage,setRiskPercentage] = useState('')
  const [positions,setPositions] = useState('1')
  const [stopLossPips,setStopLossPips] = useState('')
  const [activeCurrency,setActiveCurrency] = useState(currency.some(e=>e=='USD')?'USD':'')
  const [activeCurrencyPair,setActiveCurrencyPair] = useState('')
  const [c_pair,setC_pair] = useState('')
  const [conversionState,setConversionState] = useState(false)
  const [conversionRate,setConversionRate] = useState('') 
  const [manualConversionRate,setManualConversionRate] = useState('') 
  const [priceType,setPriceType] = useState('') 


  useEffect(() => {

    if (activeCurrencyPair && activeCurrency) {
      const base = activeCurrencyPair.slice(0,3)
      const quote = activeCurrencyPair.slice(3)
      if (activeCurrencyPair.endsWith(activeCurrency) && quote===activeCurrency) {
        console.log('same currency at end',quote)
        setConversionState(false)
      } 
      // else(console.log('different currency'))
      else {
        setConversionState(true)
        function findConversionPair(accountCurrency, quoteCurrency, pairs) {
          return pairs.find(pair => 
            pair.includes(accountCurrency) && pair.includes(quoteCurrency)
          ) || null;
        }

        function splitPair(pair) {
          return { base: pair.slice(0, 3), quote: pair.slice(3, 6) };
        }

        function getPriceType(accountCurrency, conversionBase, conversionQuote) {
          if (accountCurrency === conversionQuote) return "BID PRICE";
          if (accountCurrency === conversionBase) return "ASK PRICE";
          return "NONE";
        }

        const conversionPair = findConversionPair(activeCurrency, quote, currencyPairs);

        if (conversionPair) {
          
          setC_pair(conversionPair)
          const { base, quote } = splitPair(conversionPair);
          const type = getPriceType(activeCurrency, base, quote)
          console.log(type)
          setPriceType(type)

          const fetchData = async () => {
              const res = await fetch('/api/forexdata?pair=' + conversionPair);
              const data =  await res.json()
              console.log(data[0]?.askPrice)
              if(type=='BID PRICE'){
                setConversionRate(data[0]?.bidPrice)}
              else if(type=='ASK PRICE'){
                setConversionRate(data[0]?.askPrice),console.log('yes')} else {
                setConversionRate('N/A')
              }
             
            };

            fetchData(); // call the function


          
          console.log("Conversion Pair:", conversionPair);
          console.log("Base:", base, "Quote:", quote);
          console.log("Use:", priceType, "price");
        } else {
            setC_pair(null)
            setPriceType('NONE')
          console.log("No direct conversion pair found (need cross via USD or another).");
        }
        console.log(base,quote,conversionPair)
      }
    }
  
  }, [activeCurrency, activeCurrencyPair]);
  useEffect(()=>{setManualConversionRate('')},[conversionRate])

  return (
    <div className=' font-WixMade'>
      <p className='tracking-tight text-center lg:text-start px-6 text-base font-semibold mt-2'>Position Size Calculator</p>
      <div className='grid lg:grid-cols-9 gap-2'>
        <div className='lg:col-span-5 px-5 py-3'>
          <div className="flex mt-3 gap-6 items-center"> 
            <div className="">
                <Label className='ml-0.5'>Currency</Label>
                <ComboDropTemplate comboWidth={'w-[155px]'}  data={currency} value={activeCurrency} list setValue={(e)=>{setActiveCurrency(e)}}/>
            </div>
            <div className="">
                <Label className='ml-0.5'>Currency Pair</Label>
                <ComboDropTemplate comboWidth={'w-[155px]'} data={currencyPairs} value={activeCurrencyPair} list setValue={(item)=>{setActiveCurrencyPair(item)}}/>
            </div>
          </div>
          <div className="mt-3">
              <Label className='ml-0.5'>Account balance</Label>
              <Input type={'number'} value={accountBalance} onChange={(e)=>{setAccountBalance(e.target.value)}} className={'mt-2 bg-[#fcfcfc]'}/>
          </div>
           <div className="flex mt-3 gap-3 items-center"> 
              <div className=" flex-grow">
                  <Label className='ml-0.5'>Risk Amount</Label>
                  <Input type={'number'} value={riskAmount} onChange={(e)=>{setRiskAmount(e.target.value),accountBalance&&setRiskPercentage(e.target.value/accountBalance*100)}} className={'mt-2 bg-[#fcfcfc]'}/>
              </div>
              <div className=" flex-grow">
                  <Label className='ml-0.5'>Risk Percentage</Label>
                  <p className='w-fit inline-flex items-center gap-1 '>
                    <span>%</span>
                    <Input type={'number'} value={riskPercentage} onChange={(e)=>{setRiskPercentage(e.target.value),accountBalance&&setRiskAmount((e.target.value/100)*accountBalance)}} className={'mt-2 bg-[#fcfcfc]'}/>
                  </p>
              </div>
          </div>
          <div className="mt-3">
              <Label className='ml-0.5'>Stop Loss (pips/points):</Label>
              <Input value={stopLossPips} onChange={(e)=>{setStopLossPips(e.target.value)}} className={'mt-2 bg-[#fcfcfc]'}/>
          </div>
          <div className="mt-3">
              <Label className='ml-0.5'>Number of Positions Open:</Label>
              <Input value={positions} onChange={(e)=>{setPositions(e.target.value)}} type={'number'} className={'mt-2 bg-[#fcfcfc]'}/>
          </div>
          <div className="mt-3">
              <Label className=' mt-4'>Conversion Exchange:</Label>
             {conversionState && <div className='mt-1.5 flex flex-col items-start font-medium text-xs'>
                <div className='flex mt-1 gap-1'>
                  {c_pair!==null?<>
                      <p className='block '>{c_pair}</p>
                      {
                      priceType=='NONE'?<span className='text-black inline-block mr-2'>{priceType + ': '}</span> :
                      priceType=='BID PRICE'?<span className='text-red-500 inline-block mr-2'>{priceType + ':  '}</span> :
                      priceType=='ASK PRICE'?<span className='text-green-500 inline-block mr-2'>{priceType + ':  '}</span> :''
                      }
                      <p>{`   ${conversionRate?conversionRate:'Not Found???'}`}</p>
                  </>:<p className='text-red-300'>No conversion pair for {`${activeCurrency} and ${activeCurrencyPair.slice(3)}`}</p>}
                </div>
                {!conversionRate?<div className='w-full'>
                  <Input value={manualConversionRate} onBlur={()=>setConversionRate(manualConversionRate)} placeholder={`INPUT ${c_pair?priceType:''} manually`} onInput={(e)=>{setManualConversionRate(e.target.value)}} type={'number'} className={'mt-2 w-full lowercase text-xs bg-[#fcfcfc]'}/>
                </div>:''}
              </div>}
          </div>
          <div className='w-full flex mt-7 mb-2 justify-center'>
            <Button disabled={!conversionRate} variant={'ghost'} className={'bg-amber-400 border-[3px] border-zinc-300 h-9 scale-110 rounded-full text-base text-black cursor-pointer font-semibold py-4 px-10'}>Calculate</Button>
          </div>
        </div>
        <div className='lg:col-span-4 px-5 py-3'>
          <p className='font-bold text-center text-xl'>Results</p>
        
        </div>
      </div>
    </div>
  )
}

export default RiskCalculator