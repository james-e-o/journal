"use client"

import { cn } from "@/lib/utils"
import {useState} from "react"
import { DateRange } from "react-day-picker"

import { defaultClassNames } from "@/components/ui/calendar"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

export function Calendar04() {
  const [range, setRange] = useState({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 17),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={range?.from}
      selected={range}
      onSelect={setRange}
      numberOfMonths={1}
      captionLayout="dropdown"
      className="rounded-lg border shadow-sm [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]"
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
            <CalendarDayButton day={day} modifiers={modifiers} {...props}>
              {children}
              {!modifiers.outside && <span>{isWeekend ? "$220" : "$100"}</span>}
            </CalendarDayButton>
          )
        },
      }}
    />
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
