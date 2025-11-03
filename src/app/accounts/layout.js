'use client'
import { Candle } from "@/components/candle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import { Toaster } from "@/components/ui/sonner"
import { ToastProvider } from "@/components/custom-toast";


export default function AccountsLayout({ children }) {  
    return (   
       <div className='overflow-hidden h-full '>
            <div className='h-svh flex font-Inter border-b backdrop-blur-md flex-col'>
                <div className="flex w-full flex-grow"> 
                     <div className="px-5 pb-1 overflow-clip md:w-5/12 flex bg-white md:shadow-xs shadow-gray-200 flex-col relative justify-start  items-center flex-grow">
                        <Toaster className={'text-black bg-amber-400'}/>
                        {/* <div className="absolute size-40 -top-20 -left-14 rounded-full border-[20px] bg-transparent border-yellow-400"></div> */}
                        {/* <div className="absolute size-40 -bottom-14 -right-11 rounded-full border-[20px] bg-transparent border-yellow-400"></div> */}
                        <Candle color="bg-amber-400 scale-150" opacity={'50%'} left={'1%'} top={'-5%'} />
                        <Candle color="bg-amber-400 scale-150" opacity={'50%'} left={'5%'}  top={'0%'}/>
                        <Candle color="bg-amber-400 scale-150" opacity={'50%'} left={'9%'} wickBottom={45} bodyHeight={5} top={'5.2%'} />
                        <Candle color="bg-amber-400 scale-150" opacity={'50%'} left={'86%'} top={'89%'} wickTop={27} wickBottom={0}/>
                        <Candle color="bg-amber-400 scale-150" opacity={'50%'} left={'90%'} top={'92.5%'} wickTop={30} wickBottom={0} bodyHeight={15}/>
                        <Candle color="bg-amber-400 scale-150" opacity={'50%'} left={'94%'} top={'83%'} wickBottom={0} wickTop={25} bodyHeight={55}/>
                        <ToastProvider>                           
                            {children}  
                        </ToastProvider>
                         {/* <Link className="relative bottom-[10%]" href={'/user'}><Button  className="hover:bg-transparent font-semibold  p-8 mt-4 bg-blue-400 hover:opacity-100"><TriangleAlert className="text-white"/> <span className="text-white">Site is under construction <br /> take a tour</span></Button></Link> */}
                     </div>  
                    <div className={`hidden w-8/12 md:flex items-center relative overflow-hidden opacity-90 before:absolute bg-center bg-green-500 justify-center`}>
                        <div className="w-full h-full">
                            <div className="absolute inset-0 z-20 h-full p-8 flex items-center bg-black/65">
                                <div className="h-[140px] ml-16 w-[65%]  relative before:absolute before:w-[5px] before:bg-yellow-400 before:z-10 before:h-full before:top-0 overflow-hidden ">
                                    <div className="bg-yellow-400/20 absolute px-10 py-2 w-full top-[0px] animate-[_popUp_36s_ease-in-out_20ms_infinite_backwards] flex flex-col gap-4 justify-center h-full">
                                        <div className="text-white font-bold tracking-tighter font-WixMade text-3xl">
                                           <p>
                                            Scale Up your Forex dreams
                                            </p> 
                                           <p>
                                            Track your Journey to Success.
                                            </p> 
                                        </div>
                                    </div>
                                    <div className="bg-red-400/20 absolute px-10 py-2 w-full top-[0px] animate-[_popUp_36s_ease-in-out_12.5s_infinite_backwards] flex flex-col gap-4 justify-center h-full">
                                        <div className="text-white font-bold tracking-tighter font-WixMade text-3xl">
                                           <p>
                                            Scale Up your Forex dreams
                                            </p> 
                                           <p>
                                            Track your Journey to Success.
                                            </p> 
                                        </div>
                                    </div>
                                    <div className="bg-blue-400/20 absolute px-10 py-2 w-full top-[0px] animate-[_popUp_36s_ease-in-out_24.5s_infinite_backwards] flex flex-col gap-4 justify-center h-full">
                                        <div className="text-white font-bold tracking-tighter font-WixMade text-3xl">
                                           <p>
                                            Scale Up your Forex dreams
                                            </p> 
                                           <p>
                                            Track your Journey to Success.
                                            </p> 
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex w-[calc(100%)] animate-[_scroller3_40s_ease-out_infinite] h-full">
                                <section className="h-full scroll_item trade-concept3 bg-no-repeat p-3 bg-pink-400"></section>
                                <section className="h-full scroll_item trade-concept2 text-5xl bg-violet-400"></section>
                                <section className="h-full scroll_item trade-concept1 bg-cyan-400"></section>

                                    {/* DUPLICATE */}

                                <section className="h-full scroll_item trade-concept3 bg-no-repeat  bg-pink-400"></section>
                                <section className="h-full scroll_item trade-concept2 text-5xl bg-violet-400"></section>
                                <section className="h-full scroll_item trade-concept1 bg-cyan-400"></section>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>    
    );
}