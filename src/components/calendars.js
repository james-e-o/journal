"use client"

import {useState} from "react"
import { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export function Calendar04() {
     const [dropdown, setDropdown] =
        useState(
      "dropdown"
    )

    const [mode, setMode] = useState('single')

    const [dateRange, setDateRange] = useState({
        from: new Date(2025, 7, 1),
        to: new Date(2025, 7, 26),
    })

  return (
    <Calendar
      mode={mode}
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
       captionLayout={dropdown}
      className=" border font-sans shadow-sm w-full  [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
    />
  )
}
