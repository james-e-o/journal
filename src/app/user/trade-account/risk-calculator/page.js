'use client'
import {useEffect, useState} from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ComboDropTemplate } from '../../new-account/page';
import { Button,buttonVariants } from '@/components/ui/button';


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
  'USDJPY','USDMXN','USDNOK','USDPLN',
  'USDRUB','USDSEK','USDSGD','USDTHB',
  'USDTRY','XAGAUD','XAGEUR','XAGUSD',
  'XAUAUD','XAUCHF','XAUEUR','XAUGBP',
  'XAUJPY','XAUUSD','XPDUSD','XPTUSD',
  'ZARJPY'
]

const currency = ['USD','AUD','CAD','CHF','EUR','GBP','JPY','NZD','ZAR']

const RiskCalculator = () => {
  
  const [accountBalance,setAccountBalance] = useState('')
  const [riskAmount,setRiskAmount] = useState('')
  const [riskPercentage,setRiskPercentage] = useState('')
  const [stopLossPips,setStopLossPips] = useState('')
  const [activeCurrency,setActiveCurrency] = useState(currency.some(e=>e=='USD')?'USD':'')
  const [activeCurrencyPair,setActiveCurrencyPair] = useState('')
  const [data,setData] = useState('')
  const [conversionRate,setConversionRate] = useState('') 
  const [priceType,setPriceType] = useState('') 


  useEffect(() => {

    if (activeCurrencyPair && activeCurrency) {
      const base = [activeCurrencyPair.slice(0,3)]
      const quote = [activeCurrencyPair.slice(3)]
      if (activeCurrencyPair.endsWith(activeCurrency && quote===activeCurrency)) {
        console.log('same currency at end')
      } else {

        function findConversionPair(accountCurrency, quoteCurrency, pairs) {
          return pairs.find(pair => 
            pair.includes(accountCurrency) && pair.includes(quoteCurrency)
          ) || null;
        }

        function splitPair(pair) {
          return { base: pair.slice(0, 3), quote: pair.slice(3, 6) };
        }

        function getPriceType(accountCurrency, conversionBase, conversionQuote) {
          if (accountCurrency === conversionQuote) return "BID";
          if (accountCurrency === conversionBase) return "ASK";
          return "NONE";
        }

        const conversionPair = findConversionPair(activeCurrency, quote, currencyPairs);

        if (conversionPair) {

            const fetchData = async () => {
              try {
                const res = await fetch(`https://api.tiingo.com/tiingo/fx/${conversionPair}/top?token=157c90292fa9a2e8dfbbc8f52efe771a995d9912`,{headers:{'content-type':'application/json'}});
                
                if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const result = await res.json()
                setData(JSON.stringify(result));
                console.error(JSON.stringify(result));

              } catch (err) {
                console.error("Failed to fetch:", err);
              }
            };

            fetchData(); // call the function

          const { base, quote } = splitPair(conversionPair);
          setPriceType( getPriceType(activeCurrency, base, quote))
          
          // if (priceType !== "NONE") {setConversionRate('Not Available')} 
          // else if(priceType === "BID") {setConversionRate('Not Available')}
          // else if(priceType === "ASK") {setConversionRate('Not Available')}
          
          console.log("Conversion Pair:", conversionPair);
          console.log("Base:", base, "Quote:", quote);
          console.log("Use:", priceType, "price");
        } else {
          console.log("No direct conversion pair found (need cross via USD or another).");
        }
        console.log(base,quote,conversionPair)
      }
    }
  
  }, [activeCurrency, activeCurrencyPair]);

  return (
    <div>
      <p className='tracking-tight px-6 font-semibold my-5'>Position Size Calculator</p>
      <div className='grid grid-cols-9 gap-2'>
        <div className='col-span-5 p-5'>
          <div className="mt-4">
              <Label className='ml-0.5'>Currency</Label>
              <ComboDropTemplate data={currency} value={activeCurrency} list setValue={(e)=>{setActiveCurrency(e)}}/>
          </div>
          <div className="mt-4">
              <Label className='ml-0.5'>Currency Pair</Label>
              <ComboDropTemplate data={currencyPairs} value={activeCurrencyPair} list setValue={(item)=>{setActiveCurrencyPair(item)}}/>
          </div>
          <div className="mt-4">
              <Label className='ml-0.5'>Account balance</Label>
              <Input type={'number'} value={accountBalance} onChange={(e)=>{setAccountBalance(e.target.value)}} className={'mt-2 bg-[#fcfcfc]'}/>
          </div>
           <div className="flex mt-4 gap-3 items-center"> 
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
          <div className="mt-4">
              <Label className='ml-0.5'>Stop Loss Pips:</Label>
              <Input onChange={(e)=>{setStopLossPips(e.target.value)}} className={'mt-2 bg-[#fcfcfc]'}/>
          </div>
          <div className="mt-4">
              <Label className='ml-0.5'>Conversion Exchange rate:</Label>
              <div className='mt-3 font-medium text-xs'>
                {
                priceType=='NONE'?<span className='text-black'>{priceType}</span>:
                priceType=='BID'?<span className='text-red-500'>{priceType}</span>:
                priceType=='ASK'?<span className='text-green-500'>{priceType}</span>:''
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskCalculator