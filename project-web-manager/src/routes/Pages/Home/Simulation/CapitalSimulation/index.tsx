import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export function CapitalSimulation() {
  const SAVINGS_INTEREST_RATE = 0.6;

  const FIXED_INCOME_INTEREST_RATE = 1;

  const RSX_CAPITAL_INTEREST_RATE = 3;

  const [value, setValue] = useState(0);

  const [months, setMonths] = useState(0);

  function handleInputValueChanged(event: any) {
    let clenedText = event.target.value.replace(/\./g, '');

    setValue(parseFloat(clenedText.replace(',', '.')));
  }

  function handleInputMonthChanged(event: any) {
    setMonths(event.target.value);
  }

  function calculateInterest(tax: number): number {
    if (!isNaN(value) && !isNaN(months))
      return ((value * tax) / 100) * months + value

    return 0
  }

  return (
    <div className='border-2 border-blue-600 rounded-lg'>
      <div className='p-4'>
        <form>
          <div className='pb-4'>
            <Label className='text-sm'>VALOR APLICADO</Label>
            <div className='flex align-middle pt-2'>
              <span className='bg-primary text-md text-white rounded-l-md p-2'>R$</span>
              <Input className='text-md h-[44px] focus:border-blue-600 rounded-l-none focus:border-l-0' placeholder='Ex: 10.000' onChange={handleInputValueChanged} />
            </div>
          </div>
          <div className='pb-6'>
            <Label className='text-sm'>EM QUANTO TEMPO</Label>
            <div className='flex align-middle pt-2'>
              <Input className='text-md h-[44px] focus:border-blue-600 rounded-r-none focus:border-r-0' placeholder='Meses' type='number' onChange={handleInputMonthChanged} />
              <span className='bg-primary text-md text-white rounded-r-md p-2'>Meses</span>
            </div>
          </div>
        </form>

        <div className='pb-4 text-center'>
          <p className='pb-2'>
            Valorização na Poupança
            <span className='font-semibold'> {calculateInterest(SAVINGS_INTEREST_RATE).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </p>
          <p>
            Valorização na Renda Fixa
            <span className='font-semibold'> {calculateInterest(FIXED_INCOME_INTEREST_RATE).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </p>
        </div>
        <div className='bg-primary rounded-xl pt-3 pb-3 text-center text-white w-[120%] relative left-1/2 transform -translate-x-1/2'>
          <p className='text-lg'>Valorização com a RSX Capital:</p>
          <span className='font-semibold text-lg'>{calculateInterest(RSX_CAPITAL_INTEREST_RATE).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div className='pt-5 pb-5 text-center'>
          Na RSX Capital seu dinheiro valoriza {' '}
          <span className='font-semibold'>
            {(calculateInterest(RSX_CAPITAL_INTEREST_RATE) - calculateInterest(SAVINGS_INTEREST_RATE)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' '}
          </span>
          a mais que na Poupança
        </div>
      </div>
    </div >
  );
}