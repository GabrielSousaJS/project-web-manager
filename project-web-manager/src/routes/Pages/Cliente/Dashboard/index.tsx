import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CotasInvestimentoPaged } from "@/models/cotas-investimento-paged";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, CartesianGrid, XAxis, Line } from "recharts"
import * as loginService from '../../../../services/login-service';
import * as cotasService from '../../../../services/cotas-investimento-service';

export function Dashboard() {
  const [cotasInvestimento, setCotasInvestimento] = useState<CotasInvestimentoPaged>();

  const navigate = useNavigate();

  useEffect(() => {
    if (loginService.isAuthenticated()) {
      getAllCotasInvestimento(0);
    }
  }, [])

  function getAllCotasInvestimento(pageNumber: number) {
    cotasService.getAllCotasInvestimento(pageNumber + 1).then((response) => {
      setCotasInvestimento(response.data);
    })
  }

  return (
    <main className="w-full max-w-3xl mx-auto py-12 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Rendimento gerado</h1>
          <p className="text-muted-foreground">Balanço inicial: R$ 4,000 com 3% de rendimento ao mês</p>
        </div>
        <div className="border rounded-xl border-blue-800 border-2">
          <ChartContainer
            config={{ investment: { label: "Rendimento", color: "#000093" } }}
            className="min-h-[300px]"
          >
            <LineChart
              accessibilityLayer
              data={[
                { month: "Jan", investment: 4000 },
                { month: "Fev", investment: 4120 },
                { month: "Mar", investment: 4243.6 },
                { month: "Abr", investment: 4370.91 },
                { month: "Mai", investment: 4501.98 },
                { month: "Jun", investment: 4637.04 },
                { month: "Jul", investment: 4776.15 },
                { month: "Aug", investment: 4919.43 },
                { month: "Set", investment: 5066.92 },
                { month: "Out", investment: 5218.73 },
                { month: "Nov", investment: 5374.99 },
                { month: "Dec", investment: 5535.74 },
              ]}
              margin={{ left: 18, right: 18 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line dataKey="investment" type="natural" stroke="var(--color-investment)" strokeWidth={3} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </main>
  )
}