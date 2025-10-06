'use client'
import React, {useState} from 'react'
import LandingHeader from '@/components/hero-header'
import LandingFooter from '@/components/landing-foot'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

const PlansPage = () => {

    const monthlyPlans = [
    {
        title: 'Ignition',
        period: '2 weeks',
        price: '0',
        features: [
        'Basic Trade Logging',  
        'Limited Journal Entries',
        'Essential Analytics'
        ],
        bg: '',
        perMonth: ''
    },
    {   
        title: 'Basic',
        price: '39.99',
        period: '1 month',
        features: [
          'Unlimited Journal Entries',
          'Advanced Analytics',
          'Export Data',
          'Custom Tags & Notes'
        ],
        bg: 'text-white bg-gradient-to-b from-black to-zinc-800',
        perMonth: '/Month'
    },
    {
        title: 'Standard',
        period : '1 month',
        price: '99.99',
        features: [
        'All Starter Features',
        'AI Trade Insights',
        'Performance Benchmarks',
        'Priority Support'
        ],
        bg: 'black',
        perMonth: '/Month'
    }
    ];

    const annualPlans = [
    {
        title: 'Ignition',
        period: '2 weeks',
        price: '0',
        features: [
        'Basic Trade Logging',  
        'Limited Journal Entries',
        'Essential Analytics'
        ],
        bg: '',
        perMonth: ''
    },
    {
        title: 'Basic',
        price: '199.99',
        period: '1 year',
        features: [
        'All Standard Features',
        'Personalized Coaching',
        'Early Access to New Features',
        'Exclusive Webinars & Content' 
        ],
        bg: 'text-white bg-gradient-to-b from-black to-zinc-800',
        perMonth: '/Month',
        billed: 'Billed annually at $999.99',
        discount: 'Save 20% with annual billing ',
    },
    {
        title: 'Standard',
        price: '999.99',
        period: '1 year',
        features: [
        'All Pro Features',
        'Dedicated Account Manager',
        'Custom Integrations',
        'VIP Event Invitations'
        ],
        bg: 'black',
        perMonth: '/Month',
        billed: 'Billed annually at $999.99',
        discount: 'Save 20% with annual billing ',
    }
    ];  

  return (
    <div id="landing-wrap" className="font-sans w-full relative z-0 overflow-x-hidden no_scroll h-svh overflow-y-scroll ">
      <div className="min-h-svh relative flex z-0 flex-col justify-start bg-black">
        <LandingHeader />
      <Tabs defaultValue="monthly" className="w-full mt-3 bg-white rounded-t-3xl overflow-clip py py-12 px-9 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-core">
          Plans for Every Stage of Your Trading Journey
        </h2>
        <TabsList className="inline-flex rounded-3xl w-fit h-fit  mx-auto my-6 border-[3px] border-core bg-white p-0 gap-3" >
                <TabsTrigger  value="monthly" className={'h-11 data-[state=active]:bg-core font-bold px-7 rounded-3xl'}>Monthly</TabsTrigger>
                <TabsTrigger value="annual" className={'h-11 data-[state=active]:bg-core font-bold px-7 rounded-3xl'}>Annual</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="w-full">
            <div className='flex flex-col md:flex-row gap-8 justify-center'>
             {monthlyPlans&&monthlyPlans.map((plan,index)=>(
                  <PlanComponent key={index} {...plan} options={plan.pricing}/>
             ))}
            </div>
        </TabsContent>
        <TabsContent value="annual" className="w-full">
            <div className='flex flex-col md:flex-row gap-8 justify-center'>
             {annualPlans&&annualPlans.map((plan,index)=>(
                  <PlanComponent key={index} {...plan} options={plan.pricing } />
             ))}
            </div>
        </TabsContent>
      </Tabs>
      <LandingFooter />
      </div>
    </div>
   
  )
}

export default PlansPage



const PlanComponent = ({ title, price, features=[], bg, options, period,perMonth,discount }) => {
  // default active price
  const [activeOption, setActiveOption] = useState(
    options ? options[0] : null
  );

  return (
    <div className={`border-2 border-core overflow-clip relative rounded-2xl min-w-92 px-8 py-12 shadow hover:shadow-amber-400 transition ${bg}`}>

      {discount&& <Ribbon label={discount} colorClass={'bg-green-400'} textClass={'text-black'}/>}
      <h3 className="text-xl font-bold text-core mb-4">{title}</h3>
      
      {/* Pricing section */}
      {options ? (
        <>
          <p className="text-4xl font-extrabold mb-2">
            ${activeOption.price}
          </p>
          <p className="text-gray-400 mb-6">{activeOption.period}</p>

          {/* Option selector */}
          <div className="flex justify-center gap-2 mb-6">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => setActiveOption(option)}
                className={`px-3 py-1 h-7 text-xs rounded-lg border transition ${
                  activeOption.period === option.period
                    ? "bg-core text-black font-bold"
                    : "border-gray-400 text-gray-400 hover:border-core hover:text-core"
                }`}
              >
                {option.period}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-4xl font-extrabold mb-2">${price}<span className='text-sm font-normal'>{perMonth&&perMonth}</span></p>
          <p className="text-gray-400 mb-6">{period}</p>
        </>
      )}

      {/* Features */}
      <ul className="text-left mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index}><span>✔ </span>{feature}</li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="w-full py-3 rounded-xl bg-core text-black font-bold hover:bg-amber-400 transition">
        {title === 'Ignition' ? 'Choose Ignition' : `Upgrade to ${title}`}
      </button>
    </div>
  );
};


export function Ribbon({label = 'Demo',count = null,colorClass = 'bg-amber-400',textClass = 'text-black'}) {
    return (
    <div className="absolute top-[24.5%] right-[-10%] transform scale-105 rotate-45 origin-top-right">
      <div className={`flex items-center gap-2 px-7 py-1 rounded-xs h-12 font-semibold shadow ${colorClass} ${textClass}`}>
        <span className='text-center text-[10px]'>{label}</span>
        {count !== null && (
        <span className="bg-white text-xs font-bold rounded-full px-2 py-0.5">{count}</span>
        )}
      </div>
    </div>
  );
}