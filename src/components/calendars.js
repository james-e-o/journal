"use client"

import { cn } from "@/lib/utils"
import {useState} from "react"
import { DateRange } from "react-day-picker"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { defaultClassNames } from "@/components/ui/calendar"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

export function Calendar04() {

   const [mode, setMode] = useState('single')
  const [range, setRange] = useState({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 17),
  })
  const [date, setDate] = useState(new Date(2025, 5, 12))

  return (
    <Card className={'pt-0 rounded-lg overflow-clip'}>
      <CardContent className="p-0 ">
        <Calendar
          mode={mode}
          defaultMonth={mode==='range'?range?.from:mode==='single'?date:undefined}
          selected={mode==='range'?range:mode==='single'?date:undefined}
          onSelect={mode==='range'?setRange:mode==='single'?setDate:undefined}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="rounded-lg w-full [--cell-size:--spacing(9)] md:[--cell-size:--spacing(10)]"
          formatters={{
            formatMonthDropdown: (date) => {
              return date.toLocaleString("default", { month: "long" })
            },
          }}
          classNames={{ month: cn("flex flex-col w-full gap-2", defaultClassNames.month),}}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6
              return (
                <CalendarDayButton 
                  className={''} 
                  day={day} 
                  modifiers={modifiers} 
                  {...props}>
                      {children}
                      {!modifiers.outside && <span>{isWeekend ? "$220" : "$100"}</span>}
                </CalendarDayButton>
              )
            },
          }}
          />
      </CardContent>
      <div  className="flex px-6 items-center justify-between pt-0">
        <div className="flex gap-2">
          <button onClick={() => setMode('single')} className={cn("px-7 py-1.5 rounded-md text-sm border-[3px] border-zinc-300 font-medium",mode==='single'?"bg-amber-400 text-black":"bg-gray-200 text-gray-700 hover:bg-gray-300")}>Single</button>
          <button onClick={() => setMode('range')} className={cn("px-7 py-1.5 rounded-md text-sm border-[3px] border-zinc-300 font-medium",mode==='range'?"bg-amber-400 text-black":"bg-gray-200 text-gray-700 hover:bg-gray-300")}>Range</button>
        </div>
      </div >
    </Card>
  )
}





// export function Calendar04() {
  //      const [dropdown, setDropdown] =
  //         useState(
    //       "dropdown"
    //     )
    
    //     const [mode, setMode] = useState('single')
    
    //     const [dateRange, setDateRange] = useState({
      //         from: new Date(2025, 7, 1),
      //         to: new Date(2025, 7, 26),
//     })

//   return (
//     <Calendar
//       mode={mode}
//       defaultMonth={dateRange?.from}
//       selected={dateRange}
//       onSelect={setDateRange}
//        captionLayout={dropdown}
//        classNames={{ month: cn("flex flex-col w-full gap-2", defaultClassNames.month),}}
//       className=" border font-sans shadow-sm w-full  [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
//     />
//   )
// }
