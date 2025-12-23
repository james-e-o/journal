"use client"

import React, {useState,useEffect,useContext,useRef} from "react"
import { cn } from "@/lib/utils"
import { DateRange } from "react-day-picker"
import {ChevronDownIcon,ChevronLeftIcon,ChevronRightIcon, WholeWord} from "lucide-react"
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DataContext } from "@/app/users/[user]/layout"

export const defaultClassNames = getDefaultClassNames()

function Calendar({className,classNames,showOutsideDays = true,captionLayout = "label",buttonVariant = "ghost",formatters,components,...props}) {
  // const defaultClassNames = getDefaultClassNames()
  const {data,setData} = useContext(DataContext)
  useEffect(() => {
    const weekH= document.querySelector('.rdp-week')
    const weeksH= document.querySelector('.rdp-weeks')
    console.log(weeksH,weeksH?.clientHeight)
    const updateHeights=()=>{
      setData(prev=>({
        ...prev,
        weeksHeight:weeksH?.clientHeight,
        weekHeight:weekH?.clientHeight,
      }))
    }
    updateHeights() 
    window.addEventListener('resize', setData(prev=>({
        ...prev,
        weeksHeight:weeksH?.clientHeight,
        weekHeight:weekH?.clientHeight,
      })))
    // return () => window.removeEventListener('resize',updateHeights)
  }, [setData]);
  return (
    <DayPicker
      // weeksHeight={weeksH?.clientHeight}
      // weekHeight={weekH?.clientHeight}
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 h-8 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 h-8 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm h-8 p-0 font-medium justify-center gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border font-bold border-input h-8 shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn("select-none font-medium", captionLayout === "label"
          ? "text-sm"
          : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5", defaultClassNames.caption_label),
        table: "w-full border-collapse",
        weekdays: cn("flex ", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex gap-1 w-full mt-2", defaultClassNames.week),
        week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-amber-300 text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (<div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />);
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (<ChevronLeftIcon className={cn("size-4", className)} {...props} />);
          }

          if (orientation === "right") {
            return (<ChevronRightIcon className={cn("size-4", className)} {...props} />);
          }

          return (<ChevronDownIcon className={cn("size-4", className)} {...props} />);
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div
                className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props} />
  );
}

function CalendarDayButton({
  className,
  altClass,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      // onDoubleClick={dbckick}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        `data-[selected-single=true]:bg-amber-400 hover:cursor-pointer data-[selected-single=true]:text-black data-[selected-single=true]:font-semibold  data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-amber-300 data-[range-end=true]:text-zinc-900  group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70 ${altClass || ""}`,
        defaultClassNames.day,
        className
      )}
      {...props} />
  );
}

export { Calendar, CalendarDayButton }


export function CalendarMain() {
    const {data,setData} = useContext(DataContext)
    const [mode, setMode] = useState('single')
    const [range, setRange] = useState({
      from: new Date(2025, 5, 12),
      to: new Date(2025, 5, 17),
    })
    const [date, setDate] = useState(new Date(2025, 5, 12))

  //   useEffect(() => {
  //   const weeksH= document.querySelector('.rdp-weeks')
  //   const weekH= document.querySelector('.rdp-week')
  //   console.log(weeksH,weeksH?.clientHeight)
  //   const updateHeights=()=>{
  //     setData(prev=>({
  //       ...prev,
  //       weeksHeight:weeksH?.clientHeight,
  //       weekHeight:weekH?.clientHeight,
  //     }))
  //   }
  //   updateHeights() 
  //   // window.addEventListener('resize',updateHeights)
  //   // return () => window.removeEventListener('resize',updateHeights)
  // }, [setData]);
  //  const { setData } = useContext(DataContext);
  // const targetRef = useRef(null);

  // useEffect(() => {
  //   const element = targetRef.current;
  //   const weekH= document.querySelector('.rdp-week')
  //   // if (!element) return;

  //   const observer = new ResizeObserver((entries) => {
  //     for (let entry of entries) {
  //       setData((prev) => ({
  //         ...prev,
  //         weekHeight: entry.contentRect.height,
  //       }));
  //     }
  //   });

  //   observer.observe(weekH);
  //   // return () => observer.disconnect();
  // }, []);

  return (
     <Card className="gap-0 p-0 w-fit overflow-clip">
      <CardContent className="relative flex w-fit p-0 ">
        <div className="p-0 gap-0 flex">
            <Calendar
                mode={mode}
                defaultMonth={mode==='range'?range?.from:mode==='single'?date:undefined}
                selected={mode==='range'?range:mode==='single'?date:undefined}
                onSelect={mode==='range'?setRange:mode==='single'?setDate:undefined}
                numberOfMonths={1}
                captionLayout="dropdown"
                className="rounded-lg md:w-[34rem] [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]"
                formatters={{
                    formatMonthDropdown: (date) => {
                    return date.toLocaleString("default", { month: "long" })
                    },
                }}
                components={{
                DayButton: ({ children, modifiers, day, ...props }) => {
                const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6

                return (
                    <CalendarDayButton day={day} altClass={''} modifiers={modifiers} {...props}>
                    {children}
                    {!modifiers.outside && <span>{isWeekend ? "$220" : "$100"}</span>}
                    </CalendarDayButton>
                )
                },
            }}
            />
            </div>
            <div className=" flex max-h-72 scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-3 md:max-h-none w-36  md:border-l">
                <div className="bg-white w-full flex-col flex justify-end gap-2 h-full">
                  <div className=" w-full">
                    {data.weeksHeight && (
                      <>
                    <div style={{height: data.weekHeight}} className={`border-2 p-2 h-[${data.weekHeight}px] w-full shadow-xs rounded-lg mt-2`}>test</div>
                    <div style={{height: data.weekHeight}} className={`border-2 p-2 h-[${data.weekHeight}px] w-full shadow-xs rounded-lg mt-2`}>test</div>
                    <div style={{height: data.weekHeight}} className={`border-2 p-2 h-[${data.weekHeight}px] w-full shadow-xs rounded-lg mt-2`}>test</div>
                    <div style={{height: data.weekHeight}} className={`border-2 p-2 h-[${data.weekHeight}px] w-full shadow-xs rounded-lg mt-2`}>test</div>
                    <div style={{height: data.weekHeight}} className={`border-2 p-2 h-[${data.weekHeight}px] w-full shadow-xs rounded-lg mt-2`}>test</div>
                    </>)}
                  </div>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
