import { useEffect, useState } from 'react';
import FormInput from '@/components/FormInput';
import { LineChart, CartesianGrid, XAxis, Line, YAxis, LabelList } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Button } from '@/components/ui/button';
import { CotasInvestimentoDashboard } from '@/models/cotas-investimento-paged';
import { Pagination } from '@/components/Pagination';
import * as forms from '../../../../utils/forms';
import * as formatters from '../../../../utils/formatters';
import * as loginService from '../../../../services/login-service';
import * as dashboardService from '../../../../services/dashboard-service';

export function Dashboard() {
  const [formData, setFormData] = useState({
    initialDate: {
      value: '',
      id: 'initialDate',
      name: 'initialDate',
      type: 'date',
    },
    finalDate: {
      value: '',
      id: 'finalDate',
      name: 'finalDate',
      type: 'date',
    }
  })

  const primeiroDiaFormatado = formatters.formatarData(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

  const ultimoDiaFormatado = formatters.formatarData(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0));

  // TODO alterar o tipo para que seja dashboard
  const [cotasInvestimento, setCotasInvestimento] = useState<CotasInvestimentoDashboard>();

  useEffect(() => {
    if (loginService.isAuthenticated() && loginService.hasAnyRole(['1'])) {
      getDashboardAdmin(0, primeiroDiaFormatado, ultimoDiaFormatado);
    } else {
      getDashboardInvestidor(0, primeiroDiaFormatado, ultimoDiaFormatado);
    }

    formData.initialDate.value = primeiroDiaFormatado;
    formData.finalDate.value = ultimoDiaFormatado;
  }, [])

  function getDashboardAdmin(pageNumber: number, initialDate: string, finalDate: string) {
    dashboardService.getDashboardAdmin(pageNumber, initialDate, finalDate).then((response => {
      setCotasInvestimento(response.data);
    }));
  }

  function getDashboardInvestidor(pageNumber: number, initialDate: string, finalDate: string) {
    dashboardService.getDashboardInvestidor(pageNumber, initialDate, finalDate).then((response => {
      setCotasInvestimento(response.data);

      console.log(response.data)
    }));
  }

  function handleSearchClick() {
    if (loginService.isAuthenticated() && loginService.hasAnyRole(['1']))
      getDashboardAdmin(0, formData.initialDate.value, formData.finalDate.value);
    else if (loginService.isAuthenticated())
      getDashboardInvestidor(0, formData.initialDate.value, formData.finalDate.value);
  }

  function handleClickPagination(pageNumber: number) {
    if (loginService.isAuthenticated() && loginService.hasAnyRole(['1']))
      getDashboardAdmin(pageNumber + 1, formData.initialDate.value, formData.finalDate.value);
    else if (loginService.isAuthenticated())
      getDashboardInvestidor(pageNumber + 1, formData.initialDate.value, formData.finalDate.value);
  }

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }

  function monthlyIncomeCalculation(months: number, amountInvest: number, applicationDate: string): { month: string, investment: number }[] {
    const monthsNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const INTEREST_RATE = 0.03;
    const investments = [];

    let application = new Date(applicationDate);
    let startMonth = application.getMonth();
    let currentYear = application.getFullYear();

    for (let i = 0; i < months; i++) {
      amountInvest = amountInvest * (1 + INTEREST_RATE);

      let currentMonth = (startMonth + i) % 12;

      if (currentMonth === 0 && i !== 0) {
        currentYear++;
      }

      investments.push({
        month: `${monthsNames[currentMonth]} ${currentYear}`,
        investment: parseFloat(amountInvest.toFixed(2))
      });
    }

    return investments;
  }

  const allInvestments = cotasInvestimento?.cotasInvestimento?.flatMap((cota) =>
    monthlyIncomeCalculation(cota.meses_Aplicado, cota.valor_Aplicado, cota.data_Aplicacao)
  );

  return (
    <main className='w-full mx-auto'>\
      <div className='container mb-4'>
        <div className='text-center mb-2'>
          <h1 className='text-3xl font-bold md:text-4xl mb-4'>Rendimento gerado</h1>
          <p className='text-muted-foreground'>Balanço inicial: R$ com 3% de rendimento ao mês</p>
        </div>

        <div className='flex justify-between'>
          <div className='space-x-2'>
            <label>Data da aplicação:</label>
            <FormInput
              {...formData.initialDate}
              className='pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input'
              onChange={handleInputChange}
              onTurnDirty={() => {}}
            />
            <label>até</label>
            <FormInput
              {...formData.finalDate}
              className='pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input'
              onChange={handleInputChange}
              onTurnDirty={() => {}}
            />
            <Button onClick={handleSearchClick}>Pesquisar</Button>
          </div>
        </div>

        {cotasInvestimento?.cotasInvestimento.map((cota) => (
          <div className='text-gray-800 font-semibold mb-2'>
            Investidor: {cota.nome}
          </div>
        ))}
        <div className='border-2 rounded-xl border-blue-800'>
          <ChartContainer
            config={{ investment: { label: 'Rendimento R$', color: '#000093' } }}
            className='min-h-[300px] p-2'
          >
            <LineChart
              accessibilityLayer
              data={allInvestments}
              margin={{ left: 18, right: 50, bottom: 30 }}
            >
              <CartesianGrid stroke='#AAAAAA' strokeOpacity={1} />
              <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={19} className='text-sm md:text-lg' />
              <YAxis orientation='left' tickMargin={4} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent active />} />
              <Line dataKey='investment' type='natural' stroke='var(--color-investment)' strokeWidth={3} >
                <LabelList
                  dataKey='investment'
                  position='bottom'
                  formatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  fill='black'
                  className='font-semibold text-sm'
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </div>
      </div>

      <div className='mb-4'>
        {cotasInvestimento?.cotasInvestimento.length !== 0 && (<Pagination pageCount={cotasInvestimento ? cotasInvestimento.totalPages : 0} range={3} onChange={handleClickPagination} />)}
      </div>
    </main>
  )
}