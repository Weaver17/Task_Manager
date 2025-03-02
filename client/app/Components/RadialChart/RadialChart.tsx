"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { overdueTasks } from "@/utils/utilities";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTasks } from "@/context/taskContext";
import { act } from "react";

const chartConfig = {
  progress: {
    label: "In Progress",
    color: "#777",
  },
  completed: {
    label: "Completed",
    color: "#39b520",
  },
  overdue: {
    label: "Overdue",
    color: "#e46732",
  },
} satisfies ChartConfig;

export function RadialChart() {
  const { tasks, completedTasks, activeTasks } = useTasks();

  const tasksTotal = tasks.length;
  const chartData = [
    {
      title: "Tasks",
      progress: activeTasks.length,
      completed: completedTasks.length,
      overdue: overdueTasks(activeTasks).length,
    },
  ];

  return (
    <Card className="flex flex-col border-2 border-[#3f71e3] shadow-none bg-[#efefef]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="mb-6">Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {tasksTotal.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="progress"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-progress)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="completed"
              fill="var(--color-completed)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="overdue"
              fill="var(--color-overdue)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}

export default RadialChart;
