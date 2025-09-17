"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a label list"

const chartData = [
  { browser: "GOLDUSD", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "USDJPY", visitors: 200, fill: "var(--color-safari)" },
  { browser: "GPBUSD", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "GBPCHF", visitors: 173, fill: "var(--color-edge)" },
  { browser: "BTCUSD", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
}

export function ChartPieLabelList() {
  return (
    <Card className="flex flex-col py-5 gap-2">
      <CardHeader className="items-center pb-0">
        <CardTitle>Top 5 Most Traded Pair</CardTitle>
        <CardDescription className={'pt-0.5 text-xs'}>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart className=" relative -top-3">
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={
                  chartConfig.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
