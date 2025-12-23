'use client'

import { useEffect, useState } from "react"

import { Tabs,TabsTrigger,TabsList,TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { X ,Check, ChevronsUpDown, GripIcon, GripHorizontalIcon, ArrowRight} from "lucide-react"
import { useParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProfessionalSetup from "@/components/ProfessionalSetup"

const NewAccount = () => {
    const [activeTab,setActiveTab]= useState('basic')
    const [type, setType] = useState(null)
    const [balance, setBalance] = useState("")
    const [option, setOption] = useState(null)
    const [accountName, setAccountName] = useState("")
    const [broker, setBroker] = useState("")
    const [currency, setCurrency] = useState("")
    const [step1Error, setStep1Error] = useState(false)
    const [selectedSync, setSelectedSync] = useState('')
    const params = useParams(); 
    const userId = params.user;
    const [manualMaxDrawdown, setManualMaxDrawdown] = useState("")
    const [manualTarget, setManualTarget] = useState("")
    const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const [leverage, setLeverage] = useState("")
    const [platform, setPlatform] = useState("")
    const timeZones = Intl.supportedValuesOf('timeZone')
    const [accountId, setAccountId] = useState("")
    const [enableImportFiles, setEnableImportFiles] = useState(false)
 
    const accountType = [
        "Demo",
        "Live",
        "Proprietary"
    ]

    const tradeOptions = [
        'Forex',
        'Crypto',
        'Stocks',
        'Futures'
    ]

    function ValidateStep1() {
        let error = false;

        // if (accountName === '') error = true;
        // if (broker === '') error = true;
        // if (currency === '') error = true;
        // if (type === '') error = true;
        if (selectedSync === '') error = true;

        setStep1Error(error);

        if (error) return;
        
        setActiveTab('link');
    }

  return (
    <div className=' flex inset-0  bg-black/10 shadow-md shadow- absolute z-40 '>
        <div className='bg-white flex flex-col p-2 md:p-4 md:grid grid-cols-4 gap-2 border-zinc-400 border absolute inset-x-1.5 shadow-0 inset-y-1  overflow-clip rounded-md'>
            <div className="text-start md:flex-col justify-between w-full flex p-2 md:p-6 col-span-1 font-WixMade  rounded-lg bg-zinc-950 tracking-tight text-xl font-semibold">
                <div className=" sm:scale-100 w-full">
                    <p className="font-semibold w-full md:w-4/5 text-start flex justify-between items-center md:mx-auto md:mt-4 p-1 text-sm text-white">
                        <span>New Journal Account</span> 
                        <Link className="md:hidden" href={`/users/${params.user}/accounts`}><Button variant={'outline'} className={'px-8 text-black h-6 w-16 cursor-pointer bg-[#fafafa]'}><X /></Button></Link>
                    </p>
                    <div  className={'flex w-full md:w-4/5 mt-3 md:mt-8 mx-2 md:mx-auto items-start gap-7 md:gap-9 h-fit md:flex-col bg-transparent'}>
                        <div className="font-medium new text-start p-0 flex justify-start bg-transparent rounded-none">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
                                <p data-activetab={activeTab} className="text-amber-400 data-[activetab=basic]:bg-amber-400 border data-[activetab=basic]:text-black  border-amber-400 rounded-full size-5 md:size-6 inline-flex items-center justify-center  bg-transparent text-base md:text-2xl font-bold"><span className="text-xs font-semibold">1</span></p>
                                <div className="flex flex-col  md:gap-0.5">
                                    <p className="text-zinc-400 text-[10px] uppercase font-medium">step 1</p>
                                    <p className="text-white text-xs lg:text-sm uppercase font-medium">Account Info</p>
                                </div>
                            </div>
                        </div>
                        <div className="font-medium  text-start p-0 flex justify-start bg-transparent rounded-none">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
                                <p data-activetab={activeTab} className="text-amber-400 data-[activetab=link]:bg-amber-400 border data-[activetab=link]:text-black  border-amber-400 rounded-full size-5 md:size-6 inline-flex items-center justify-center  bg-transparent text-base md:text-2xl font-bold"><span className="text-xs font-semibold">2</span></p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-zinc-400 text-[10px] uppercase font-medium">step 2</p>
                                    <p className="text-white text-xs lg:text-sm uppercase font-medium">Sync Data</p>
                                </div>
                            </div>
                        </div>
                        <div className="font-medium text-start p-0 flex justify-start bg-transparent rounded-none">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
                                <p   data-active="tabs-trigger" data-activetab={activeTab} className="text-amber-400 data-[activetab=setup]:bg-amber-400 border data-[activetab=setup]:text-black  border-amber-400 rounded-full size-5 md:size-6 inline-flex items-center justify-center  bg-transparent text-base md:text-2xl font-bold"><span className="text-xs font-semibold">3</span></p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-zinc-400 text-[10px] uppercase font-medium">step 3</p>
                                    <p className="text-white text-xs lg:text-sm uppercase font-medium">Professional <br/> setup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex opacity-20 gap-2">
                    <Candle />
                    <Candle />
                    {/* <Candle /> */}
                </div>
            </div>
            <div className="text-start lg:col-span-2 col-span-3 px-4 md:px-10 md:py-0 py-2 h-full flex-col mb-1 flex font-WixMade grow tracking-tighter text-xl font-semibold">
                <div className="hidden md:flex relative -top-2 justify-end">
                    <Link href={`/users/${params.user}/accounts`}><Button variant={'outline'} className={'px-8 w-16 relative top-4 cursor-pointer bg-[#fafafa]'}><X /></Button></Link>
                </div>
                <div className="grow">
                {
                    activeTab==='basic'?    <div className={'flex flex-col h-full justify-between'}>
                            <div>
                                <p className="text-xl md:text-3xl tracking-normal font-bold font-MontserratAl">Account Info</p>
                                <div className="mt-4">
                                    <div className="mt-4">
                                        <Label className='ml-0.5'>Account Name:</Label>
                                        <Input value={accountName} onChange={(e)=>{setAccountName(e.target.value)}} className={'mt-2'}/>
                                        <p className="text-xs text-red-500 italic ml-0.5">{(step1Error && !accountName)?`required`:``}</p>
                                    </div>
                                   
                                    <div className=" mt-5 grow">
                                        <Label className='ml-0.5'>What do you want to trade?</Label>
                                        <ComboDropTemplate list data={tradeOptions} comboWidth={'w-[250px]'} value={option} setValue={setOption}/>
                                        <p className="text-xs text-red-500 italic ml-0.5">{(step1Error && !option)?`required`:``}</p>
                                    </div>
                                    <div className="flex mt-5 gap-5 items-center">
                                        {/* <div className=" grow">
                                            <Label className='ml-0.5'>Account Type:</Label>
                                            <ComboDropTemplate list data={accountType} comboWidth={'w-[250px]'} value={type} setValue={setType}/>
                                            <p className="text-xs text-red-500 italic ml-0.5">{(step1Error && !type)?`required`:``}</p>
                                         
                                        </div> */}
                                    </div>
                                    <div className=" mt-5 grow">
                                        <Label className='ml-0.5'>Synchronization Options:</Label>
                                        <div className="mt-2 space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="manual" checked={selectedSync === 'manual'} onCheckedChange={(checked) => setSelectedSync(checked ? 'manual' : '')} />
                                                <Label htmlFor="manual">Manual Sync</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="meta" checked={selectedSync === 'meta'} onCheckedChange={(checked) => setSelectedSync(checked ? 'meta' : '')} />
                                                <Label htmlFor="meta">Meta Trader</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="platform" checked={selectedSync === 'platform'} onCheckedChange={(checked) => setSelectedSync(checked ? 'platform' : '')} />
                                                <Label htmlFor="platform">Other Options</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="broker" checked={selectedSync === 'broker'} onCheckedChange={(checked) => setSelectedSync(checked ? 'broker' : '')} />
                                                <Label htmlFor="broker">Broker Sync</Label>
                                            </div>
                                        </div>
                                        <p className="text-xs text-red-500 italic ml-0.5">{(step1Error && !selectedSync)?`required`:``}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end  px-4 py-2">
                                <Button onClick={ValidateStep1} className={''}>Next Step</Button>
                            </div>
                    </div>:
                    activeTab==='link'?    <div className={'flex flex-col h-full justify-between'}>
                            <div className="grow">    
                                <div className="h-full flex-col flex">
                                    <p className="text-xl tracking-normal font-bold font-MontserratAl">Synchronize Trade Data</p>
                                    <div className="mt-4 grow">
                                        {selectedSync === 'meta' && <MetaSync userId={userId} />}
                                        {selectedSync === 'platform' && <PlatformSync />}
                                        {selectedSync === 'broker' && <BrokerSync />}
                                        {selectedSync === 'manual' && <ManualSync balance={balance} setBalance={setBalance} type={type} setType={setType} timeZones={timeZones} broker={broker} setBroker={setBroker} platform={platform} setPlatform={setPlatform} timeZone={timeZone} setTimeZone={setTimeZone} leverage={leverage} setLeverage={setLeverage} currency={currency} setCurrency={setCurrency} accountId={accountId} setAccountId={setAccountId} enableImportFiles={enableImportFiles} setEnableImportFiles={setEnableImportFiles} />}
                                    </div>
                                </div>                            
                            </div>
                            <div className="flex justify-between px-4 py-2">
                                <Button onClick={() => setActiveTab('basic')}>Back</Button>
                                <Button onClick={() => setActiveTab('setup')}>Next Step</Button>
                            </div>
                    </div>:
                    activeTab==='setup'?    <div className={'flex flex-col h-full justify-between'}>
                            <div>                                
                                <p className="text-xl md:text-3xl tracking-normal capitalize font-bold font-MontserratAl">Professional setup</p>
                                <div className="mt-4">
                                    {selectedSync === 'meta' && <MetaSetup />}
                                    {selectedSync === 'platform' && <PlatformSetup />}
                                    {selectedSync === 'broker' && <BrokerSetup />}
                                    {selectedSync === 'manual' && <ManualSetup manualMaxDrawdown={manualMaxDrawdown} setManualMaxDrawdown={setManualMaxDrawdown} manualTarget={manualTarget} setManualTarget={setManualTarget} />}
                                </div>
                            </div>
                            <div className="flex justify-between px-4 py-2">
                                <Button onClick={() => setActiveTab('link')}>Back</Button>
                                <Button className={''}>Next Step</Button>
                            </div>
                    </div>:''
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewAccount

const Platform = [
    "CTrader",
    "Trading View",
]

const MetaSync = ({ userId }) => {
    const [brokerServer, setBrokerServer] = useState('')
    const [accountLogin, setAccountLogin] = useState('')
    const [investorPassword, setInvestorPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSync = async () => {
        if (!brokerServer || !accountLogin || !investorPassword) {
            alert('Please fill all fields')
            return
        }
        setLoading(true)
        try {
            // Example: Insert into a table, using userId
            const { data, error } = await supabase
                .from('sync_accounts')
                .insert({
                    user_id: userId, // Use the authenticated user ID
                    broker_server: brokerServer,
                    account_login: accountLogin,
                    investor_password: investorPassword,
                    sync_type: 'meta'
                })
            if (error) throw error
            alert('Sync successful')
        } catch (error) {
            console.error('Sync error:', error)
            alert('Sync failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex mt-2 gap-5 items-center">
                <div className=" grow">
                    <Label className='ml-0.5'>Broker Server:</Label>
                    <Input value={brokerServer} onChange={(e) => setBrokerServer(e.target.value)} className={'mt-2'}/>
                </div>
            </div>
            <div className="flex mt-4 gap-5 items-center">
                <div className=" grow">
                    <Label className='ml-0.5'>Account Login:</Label>
                    <Input value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)} className={'mt-2'}/>
                </div>
                <div className=" grow">
                    <Label className='ml-0.5'>Investor Password:</Label>
                    <Input type="password" value={investorPassword} onChange={(e) => setInvestorPassword(e.target.value)} className={'mt-2'}/>
                </div>
            </div>
            <div className="mt-6">
                <Button onClick={handleSync} disabled={loading} className={'h-8 bg-zinc-900 px-16'}>{loading ? 'Syncing...' : 'Sync'}</Button>
            </div>
        </>
    )
}

const PlatformSync = () => {
    const [trader, setTrader] = useState(Platform[0])
    return (
        <>
            <div className="mt-2"></div>
            <ComboDropTemplate data={Platform} list b_placeholder={'Search platform'} comboWidth={'w-[240px]'}  value={trader} setValue={setTrader}/>
        </>
    )
}

const BrokerSync = () => {
    const [syncAccount, setSyncAccount] = useState("list")
    return (
        <div className="flex-col flex h-full">
            <div className=" grow">
                {
                    syncAccount==='list'?<div className="">
                        <p className="text-sm ">broker list</p>
                    </div>:
                    syncAccount==='item'?<div  className="">

                    </div>:''
                }
            </div>
        </div>
    )
}

const ManualSync = ({ timeZone, setTimeZone, leverage, setLeverage, currency, setCurrency, balance,setBalance,type, setType,broker,setBroker,platform,setPlatform,timeZones, accountId, setAccountId, enableImportFiles, setEnableImportFiles}) => {
    const accountType = [
        "Demo",
        "Live",
        "Proprietary"
    ]
    return (

    
    <div>
        <p className="text-[10px] italic text-neutral-600 tracking-loose font-Inter font-light ">Manual sync selected. You can manually input your trade data later.</p>
        <div className="mt-4">
            <div className=" mt-2 grow">
                <Label className='ml-0.5'>Starting Balance:</Label>
                <Input  value={balance} onChange={(e) => setBalance(e.target.value)} className={'mt-1'}/>
                <p className="text-xs text-red-500 italic ml-0.5"></p>
            </div>
            <div className=" grow">
                <Label className='ml-0.5 mt-4'>Account Type:</Label>
                <ComboDropTemplate list data={accountType} comboWidth={'w-[250px]'} value={type} setValue={setType}/>
                {/* <p className="text-xs text-red-500 italic ml-0.5">{(step1Error && !type)?`required`:``}</p> */}
                
            </div>
            <div className="flex mt-4 gap-5 items-center">
                    <div className=" grow">
                        <Label className='ml-0.5'>Broker:</Label>
                        <Input value={broker} onChange={(e) => setBroker(e.target.value)} className={'mt-2'}/>
                        <p className="text-xs text-red-500 italic ml-0.5"></p>
                    </div>
                    <div className=" grow">
                        <Label className='ml-0.5'>Platform:</Label>
                        <Input value={platform} onChange={(e) => setPlatform(e.target.value)} className={'mt-2'}/>
                        <p className="text-xs text-red-500 italic ml-0.5"></p>
                    </div>
                </div>
                <div className="flex mt-4 gap-5 items-center">
                    <div className=" grow">
                        <Label className='ml-0.5'>Currency:</Label>
                        <Input value={currency} onChange={(e) => setCurrency(e.target.value)} className={'mt-2'}/>
                        <p className="text-xs text-red-500 italic ml-0.5"></p>
                    </div>
                    <div className=" grow">
                        <Label className='ml-0.5'>Leverage:</Label>
                        <Input value={leverage} onChange={(e) => setLeverage(e.target.value)} className={'mt-2'}/>
                        <p className="text-xs text-red-500 italic ml-0.5"></p>
                    </div>
                </div>
                <div className=" mt-4 w-1/2 grow">
                    <Label className='ml-0.5'>Time Zone:</Label>
                    <Select value={timeZone} className={'w-full'} onValueChange={setTimeZone} >
                        <SelectTrigger className={'mt-1 w-full  '}>
                            <SelectValue  className={'w-full px-2'} placeholder="Select time zone" />
                        </SelectTrigger>
                        <SelectContent className={'bg-amber-400'}>
                            {timeZones.map((tz) => (
                                <SelectItem key={tz} value={tz}>
                                    {tz}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-red-500 italic ml-0.5"></p>
                </div>
                <div className="mt-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="enable-import" checked={enableImportFiles} onCheckedChange={setEnableImportFiles} />
                        <Label htmlFor="enable-import">Enable import files</Label>
                    </div>
                    {enableImportFiles && (
                        <div className="mt-2">
                            <Label className='ml-0.5'>Account ID:</Label>
                            <Input value={accountId} onChange={(e) => setAccountId(e.target.value)} className={'mt-1'} />
                            <p className="text-xs text-gray-400 italic ml-0.5 mt-1">This is to ensure that imported documents' ID matches this account ID.</p>
                        </div>
                    )}
                </div>

        </div>
    </div>
)}







const MetaSetup = () => (
    <div>
        <p className="text-sm font-bold tracking-normal italic w-fit py-2 px-1 border-b">Account Rules/Goals for Meta Trader</p>
        <p className="text-sm mt-3 tracking-normal w-fit flex items-center gap-2 py-2 px-1 "><GripHorizontalIcon /><span>Daily</span></p>
        <div className="flex mt-4 gap-6 items-center">
            <div className="grow">
                <Label className='ml-0.5 font-light'>Daily Max. Drawdown:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
            <div className="grow">
                <Label className='ml-0.5 font-light'>Daily Target:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
        </div>
        <p className="text-sm mt-3 tracking-normal w-fit flex items-center gap-2 py-2 px-1 "><GripHorizontalIcon /><span>Weekly</span></p>
        <div className="flex mt-4 gap-6 items-center">
            <div className="grow">
                <Label className='ml-0.5 font-light'>Weekly Max. Drawdown:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
            <div className="grow">
                <Label className='ml-0.5 font-light'>Weekly Target:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
        </div>
    </div>
)

const PlatformSetup = () => (
    <div>
        <p className="text-sm font-bold tracking-normal italic w-fit py-2 px-1 border-b">Account Rules/Goals for Other Platforms</p>
        <p className="text-sm mt-3 tracking-normal w-fit flex items-center gap-2 py-2 px-1 "><GripHorizontalIcon /><span>Session</span></p>
        <div className="flex mt-4 gap-6 items-center">
            <div className=" grow">
                <Label className='ml-0.5 font-light'>Session Max. Drawdown:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
            <div className=" grow">
                <Label className='ml-0.5 font-light'>Session Target:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
        </div>
    </div>
)

const BrokerSetup = () => (
    <div>
        <p className="text-sm font-bold tracking-normal italic w-fit py-2 px-1 border-b">Account Rules/Goals for Broker Sync</p>
        <p className="text-sm mt-3 tracking-normal w-fit flex items-center gap-2 py-2 px-1 "><GripHorizontalIcon /><span>Broker</span></p>
        <div className="flex mt-4 gap-6 items-center">
            <div className=" grow">
                <Label className='ml-0.5 font-light'>Broker Max. Drawdown:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
            <div className=" grow">
                <Label className='ml-0.5 font-light'>Broker Target:</Label>
                <Input className={'mt-2 h-7'}/>
            </div>
        </div>
    </div>
)

const ManualSetup = ({ manualMaxDrawdown, setManualMaxDrawdown, manualTarget, setManualTarget }) => (
    <div>
        <p className="text-sm font-bold tracking-normal italic w-fit py-2 px-1 border-b">Account Rules/Goals for Manual Sync</p>
        <p className="text-sm mt-3 tracking-normal w-fit flex items-center gap-2 py-2 px-1 "><GripHorizontalIcon /><span>Manual</span></p>
        <div className="flex mt-4 gap-6 items-center">
            <div className=" grow">
                <Label className='ml-0.5 font-light'>Manual Max. Drawdown:</Label>
                <Input value={manualMaxDrawdown} onChange={(e) => setManualMaxDrawdown(e.target.value)} className={'mt-2 h-7'}/>
            </div>
            <div className=" grow">
                <Label className='ml-0.5 font-light'>Manual Target:</Label>
                <Input value={manualTarget} onChange={(e) => setManualTarget(e.target.value)} className={'mt-2 h-7'}/>
            </div>
        </div>
        <ProfessionalSetup />
    </div>
)

const LinkAccount = () => {
    const [syncAccount, setSyncAccount] = useState("list")
    const Platform = [
        "CTrader",
        "Trading View",
    ]
    const [trader, setTrader] = useState(Platform[0])
    return(
            <Tabs className='flex-col flex h-full'  defaultValue={'meta'}>
                <p className="font-medium text-sm mb-0.5 items-center flex gap-2">Sync options <ArrowRight className="size-4"/></p>
                <TabsList className={`inline-grid grid-cols-3 md:grid-cols-4 h-fit -ml-0.5 bg-transparent px-0 gap-2 md:gap-7 rounded-none`}>
                    <TabsTrigger value='meta' className={`shadow-none border-[3px] px-3 data-[state=active]:bg-black data-[state=active]:text-white bg-zinc-50 data-[state=active]:border-yellow-200/70 `}>Meta Trader</TabsTrigger>
                    <TabsTrigger value='platform' className={`shadow-none border-[3px] px-3 data-[state=active]:bg-black data-[state=active]:text-white bg-zinc-50 data-[state=active]:border-yellow-200/70 `}>Other Platforms</TabsTrigger>
                    <TabsTrigger value='broker' className={`shadow-none border-[3px] px-3 data-[state=active]:bg-black data-[state=active]:text-white bg-zinc-50 data-[state=active]:border-yellow-200/70 `}>Broker Sync</TabsTrigger>
                    <TabsTrigger value='manual' className={`shadow-none border-[3px] px-3 data-[state=active]:bg-black data-[state=active]:text-white bg-zinc-50 data-[state=active]:border-yellow-200/70 `}>Manual Sync</TabsTrigger>
                </TabsList>
                <TabsContent className='font-normal' value='broker'>
                    <div className="flex-col flex h-full">
                        <div className=" grow">
                            {
                                syncAccount==='list'?<div className="">
                                    <p className="text-sm ">broker list</p>
                                </div>:
                                syncAccount==='item'?<div  className="">

                                </div>:''
                            }
                        </div>
                    </div>
                </TabsContent>
                <TabsContent className='' value='platform'>
                    <div className="flex-col flex h-full">
                        <div className="mt-2"></div>
                        <ComboDropTemplate data={Platform} list b_placeholder={'Search platform'} comboWidth={'w-[240px]'}  value={trader} setValue={setTrader}/>
                         {/* {
                                trader===Platform[0]?<div className="">
                                   meta
                                  
                                </div>:
                                trader===Platform[1]?<div className="">
                                        ctrader
                                </div>:
                                trader===Platform[2]?<div className="">
                                        trading view
                                </div>:''
                        } */}
                        
                     </div>
                </TabsContent>
                <TabsContent value='meta'>
                     <div className="flex mt-2 gap-5 items-center">
                        <div className=" grow">
                            <Label className='ml-0.5'>Broker Server:</Label>
                            <Input className={'mt-2'}/>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-5 items-center">
                        <div className=" grow">
                            <Label className='ml-0.5'>Account Login:</Label>
                            <Input className={'mt-2'}/>
                        </div>
                        <div className=" grow">
                            <Label className='ml-0.5'>Investor Password:</Label>
                            <Input className={'mt-2'}/>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button className={'h-8 bg-zinc-900 px-16'}>Sync</Button>
                    </div>
                </TabsContent>
            
            </Tabs>
    )
}







export const ComboDropTemplate = ({value,setValue,list,data,b_placeholder,s_placeholder,comboSearch,comboWidth,buttonWidth,buttonHeight}) => {
    const [open, setOpen] = useState(false)
  

    // useEffect(()=>{
    //     setButtonWidth(width)
    // })    

    return (
        <Popover className='' open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={` ${buttonWidth || comboWidth || 'w-37.5'} ${buttonHeight|| 'h-8'} mt-2 justify-between`}
                >
                {value
                    ? data.find((item) => item === value)
                    // :defaultVal?defaultVal
                    : `${b_placeholder?b_placeholder:'Select...'}`}
                <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`${comboWidth?comboWidth:'w-50'} p-0`}>
                <Command>
                {comboSearch&&<CommandInput placeholder={s_placeholder?s_placeholder:`Search...`} className="h-7" />}
                {list&&<CommandList>
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                    {data.map((item) => (
                        <CommandItem
                        key={item}
                        value={item}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                        {item}
                        <Check
                            className={cn(
                            "ml-auto",
                            value === item? "opacity-100" : "opacity-0"
                            )}
                        />
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>}
                </Command>
            </PopoverContent>
        </Popover>
    )
}



export const Candle = ({
  bodyHeight = 40,   // body height
  bodyWidth = 12,    // body width
  wickTop = 20,      // wick above body
  wickBottom = 20,   // wick below body
  bullish = true,    // green if bullish, red if bearish
  color='bg-amber-400',             // optional custom Tailwind color
  opacity = 1,       // opacity (0–1 range for precision)
  top = 0,           // absolute top position
  left = 0           // absolute left position
}) => {
  const candleColor = color || (bullish ? "bg-green-500" : "bg-red-500");

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        top,
        left,
        opacity,
      }}
    >
      {/* Top wick */}
      <div
        className={` ${candleColor}`}
        style={{ height: wickTop, width: 1 }}
      ></div>

      {/* Candle body */}
      <div
        className={` ${candleColor}`}
        style={{ height: bodyHeight, width: bodyWidth }}
      ></div>

      {/* Bottom wick */}
      <div
        className={`relative ${candleColor}`}
        style={{ height: wickBottom, width: 1 }}
      ></div>
    </div>
  );
};



//   <div className="flex mt-4 gap-5 items-center">
//                         <div className=" grow">
//                             <Label className='ml-0.5'>Broker Server:</Label>
//                             <Input className={'mt-2'}/>
//                         </div>
//                     </div>
//                     <div className="flex mt-4 gap-5 items-center">
//                         <div className=" grow">
//                             <Label className='ml-0.5'>Account Login:</Label>
//                             <Input className={'mt-2'}/>
//                         </div>
//                         <div className=" grow">
//                             <Label className='ml-0.5'>Investor Password:</Label>
//                             <Input className={'mt-2'}/>
//                         </div>
//                     </div>