export default function AccountsLayout({ children }) {
  
    return (   
       <div className='overflow-hidden h-full '>
            <div className='h-svh flex font-Inter border-b backdrop-blur-md flex-col'>
                <div className="flex w-full flex-grow"> 
                     <div className="px-5 pb-1 overflow-clip md:w-5/12 pt-10 flex bg-white md:shadow-xs shadow-gray-200 flex-col relative justify-start  items-center flex-grow">
                        <div className="absolute left-0 right-0 h-1/3 top-0 accounts-img"></div>
                        <div className="absolute size-40 -bottom-14 -right-11 rounded-full border-[20px] bg-transparent border-yellow-400"></div>
                        {children}  
                     </div>  
                    <div className={`hidden w-8/12 md:flex p-8 items-center opacity-90 before:bg-black/55 before:absolute  before:w-full before:h-full bg-center bg bg-contain -z-10 bg-no-repeat trade-concept justify-center`}>
                        
                        <div className="bg-yellow-400 z-20 w-48 h-32">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}