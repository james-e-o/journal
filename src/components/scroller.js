"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "The Intelligent Investor.",
    desc: "by Benjamin Graham."
  },
  {
    title: "The Disciplined Trader.",
    desc: "by Mark Douglas."
  },
  {
    title: "Trading In The Zone.",
    desc: "by Mark Douglas."
  },

];

export default function FeatureScroller() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white flex flex-col space-y-8 rounded-lg px-4 md:px-6 py-7   ">
        
    <div className="flex flex-col md:flex-row items-center md:h-[45vh] gap-5 justify-center px-2  md:px-10">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-3">
        <h1 className="md:text-4xl text-2xl capitalize font-bold">
          Improve your trading with the best Resources, and more...
        </h1>
        <div className="mt-3 md:mt-6 h-20 overflow-hidden md:h-fit">
          <h2 className="text-base md:text-lg font-semibold transition-opacity duration-500">
            {features[activeIndex].title}
          </h2>
          <p className="text-base leading-tight md:text-lg opacity-80">{features[activeIndex].desc}</p>
        </div>
      </div>

      {/* Right Scrolling Section */}
      <div className="w-full md:w-1/2 h-80 overflow-hidden relative top-[10%] rounded-lg border border-gray-200">
        <div
          className="absolute flex h-80 top-0 left-0 w-full transition-transform duration-700"
        //   style={{ transform: `translateY(-${activeIndex * 100}%)` }}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {features.map((item, index) => (
              <div
              key={index}
              className=" h-full flex scroll_item items-center justify-center bg-core/10 text-white text-2xl font-bold"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
      <Button className='rounded-full text-zinc-950 ml-2.5 md:ml-9 w-fit h-12 px-7 py-2 bg-core border-[3px] border-zinc-500'>Get Resources</Button>
    </div>
  );
}
