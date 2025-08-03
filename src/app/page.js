import { Button,buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="font-sans no_scroll items-center h-svh overflow-y-auto pb-20 gap-16 ">
      <div className="h-svh relative flex flex-col justify-start bg-zinc-950">
        <div className="bg-[#e0b402] blur-[100px] scale-105 before:w-full before:h-full before:bg-transparent before:absolute before:blur-3xl top-1/4 right-2/12 size-52 absolute"></div>
        <header className="flex my-5 font-serif justify-between border border-zinc-700 mx-auto md:w-[65%] px-[1.8rem] py-1.5 rounded-[48px] bg-white/5 items-center ">
        {/* <header className="flex  mb-7 justify-between py-3 md:py-8 md:px-7 items-center "> */}
          <div>
            <Image
              className="dark:invert scale-x-[115%]"
              src="/rayani3.png"
              alt="Next.js logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <nav className="flex gap-10">
            <p className="flex gap-2.5">
              <Button variant={'ghost'} className={'text-white font-Cinzel hover:bg-transparent hover:-translate-y-0.5 hover:text-amber-200 font-semibold'}>About</Button>
              <Button variant={'ghost'} className={'text-white hover:bg-transparent hover:-translate-y-0.5 hover:text-amber-200 font-semibold font-Cinzel'}>Blogs</Button>
              <Button variant={'ghost'} className={'text-white hover:bg-transparent hover:-translate-y-0.5 hover:text-amber-200 font-semibold font-Cinzel'}>Plans</Button>
            </p>
            <Button variant={'destructive'} className={'bg-white text-black rounded-3xl md:h-9 font-bold font-Cinzel tracking-tighter border-2 border-zinc-400'}>Sign in</Button>
          </nav>
        </header>
        <div className="flex items-center flex-col  justify-center">
          <p className="text-[#f1f1f1] font-sans font-bold tracking-tighter text-6xl">Realize your trading dreams</p>
          <div className="rounded-4xl bg-white mt-8 border-2 border-zinc-400">
            <input placeholder="Enter your email address" className={'w-50vw py-4 px-8 border-none outline-0'} />
            <Button className={' rounded-[inherit] px-8 -top-0.5 h-full font-semibold font-sans'}>Get started</Button>
          </div>
        </div>
      </div>
      <main className="flex py-12 flex-col">
        <div className="flex flex-col items-center justify-start">
          <p className="font bold tracking-tighter font-bold text-5xl text-zinc-800 font-sans py-5">Your trusted trading journal.</p>
          <div className="w-4/5 p-12 flex flex-col mt-10 items-center gap-3 rounded-3xl bg-gradient-to-b from-[#EFBF04] to-amber-500">
              <p className="text-6xl font-bold font-sans tracking-tighter">120,000+</p>
              <span className="text-white relative top-3 font-semibold">Registered users</span>
          </div>
        </div>
        <div className="bg-zinc-50  mt-20 p-9">
             <Carousel className="w-[95%] mx-auto">
              <CarouselContent className="-ml-1 animate-[scroller_9s_infinite]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
                </div>
       
      </main>
      <footer className="flex md:grid text-xs text-zinc-800 gap-4 grid-cols-4 p-9">
        <div></div>
        <div className="">
          <p className="font-bold text-sm text-black">Company</p>
          <div className="flex mt-6 flex-col gap-4">
            <p className="">About</p>
            <p className="">Terms and Conditions</p>
            <p className="">Privacy policy</p>
            <p className="">Refunds and Cancellation</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}

{/* <Image
  className="dark:invert"
  src="/next.svg"
  alt="Next.js logo"
  width={180}
  height={38}
  priority
/> */}