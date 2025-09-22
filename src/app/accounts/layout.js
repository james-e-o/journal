export default function AccountsLayout({ children }) {
  
    return (   
       <div className='overflow-hidden h-full '>
            <div className='h-svh flex font-Inter border-b backdrop-blur-md flex-col'>
                <div className="flex w-full flex-grow"> 
                     <div className="px-5 pb-1 overflow-clip md:w-5/12 pt-4 flex bg-white md:shadow-xs shadow-gray-200 flex-col relative justify-start  items-center flex-grow">
                        <div className="absolute size-40 -top-20 -left-14 rounded-full border-[20px] bg-transparent border-yellow-400"></div>
                        <div className="absolute size-40 -bottom-14 -right-11 rounded-full border-[20px] bg-transparent border-yellow-400"></div>
                        {children}  
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
                        {/* <div className={`hidden w md:flex p-8 items-center opacity-90 before:bg-black/55 before:absolute  before:w-full before:h-full bg-center bg bg-contain -z-10 bg-no-repeat trade-concept justify-center`}>
                        
                                
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>    
    );
}