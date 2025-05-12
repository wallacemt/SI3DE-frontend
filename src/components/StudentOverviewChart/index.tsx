import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router"

const chartData = [
    { month: "January", inscritos: 186, contratados: 80 },
    { month: "February", inscritos: 305, contratados: 200 },
    { month: "March", inscritos: 237, contratados: 120 },
    { month: "April", inscritos: 73, contratados: 190 },
    { month: "May", inscritos: 209, contratados: 130 },
    { month: "June", inscritos: 214, contratados: 140 },
]

const chartConfig = {
    inscritos: {
        label: "Inscritos",
        color: "#2563eb",
    },
    contratados: {
        label: "Contratados",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function StudentsOverviewChart() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={cn(
                "transition-all duration-300 rounded-xl border p-4 bg-background shadow-md",
                expanded ? "h-full" : "h-16 overflow-hidden"
            )}
        >
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-semibold text-muted-foreground">
                    Visão Geral das Inscrições
                </h2>
                <div className="flex gap-2">
                    <Link to="/uniruy/dashboard/graficos">
                        <Button
                            size="sm"
                            variant="default"
                        >
                          Ver mais
                        </Button>
                    </Link>
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Ocultar" : "Expandir"}
                    </Button>
                </div>
            </div>

            <ChartContainer config={chartConfig} className="w-full h-[20rem]">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="inscritos" fill="var(--color-inscritos)" radius={4} />
                    <Bar dataKey="contratados" fill="var(--color-contratados)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}
