import './style.css'
import logo from '../../../../assets/images/short-logo.png'
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function Form() {
  return (
    <section className='bg-image bg-cover pt-10 pb-10'>
      <div className='flex flex-col md:space-x-8 container md:flex-row'>
        <div className='flex-1'>
          <div className='container-logo pb-6'>
            <img src={logo} alt='Logo RSX Capital' />
          </div>
          <div className='pb-4'>
            <h1 className='text-4xl mb-4 font-bold text-white'>
              <span className='text-bg pl-3 pr-3 rounded-md'>
                Invista com a RSX Capital e Obtenha Retornos Sólidos de até 3% ao Mês
              </span>
            </h1>
            <p className='text-white text-md pl-3 pr-3'>
              Participe dos Setores que Movimentam a Economia Brasileira
              e Veja seu Dinheiro Crescer com Segurança e Transparência.
              Seja Sócio em Investimentos Estratégicos com a RSX Capital.
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <form action='' className=''>
            <Input placeholder='Nome' className='mb-4 text-white text-md p-6 bg-input rounded-xl' />
            <Input placeholder='Sobrenome' className='mb-4 text-white text-md p-6 bg-input rounded-xl' />
            <Input placeholder='E-mail' className='mb-4 text-white text-md p-6 bg-input rounded-xl' />
            <Input placeholder='Telefone' className='mb-4 text-white text-md p-6 bg-input rounded-xl' />
            <div className='w-full mb-4'>
              <Select>
                <SelectTrigger className='w-full text-white p-3 bg-input rounded-xl border-2 text-md p-6'>
                  <SelectValue placeholder='Valor em cotas (R$)' />
                </SelectTrigger>
                <SelectContent className='w-full text-white p-3 bg-input w-full rounded-xl border-2'>
                  <SelectGroup>
                    <SelectLabel>Valor em cotas (R$)</SelectLabel>
                    <SelectItem value='1200' >1200</SelectItem>
                    <SelectItem value='2400' >2400</SelectItem>
                    <SelectItem value='3600' >3600</SelectItem>
                    <SelectItem value='4800' >4800</SelectItem>
                    <SelectItem value='6000' >6000</SelectItem>
                    <SelectItem value='6000+'>6000+</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex align-middle text-[9px] pb-4'>
              <Checkbox id='terms' className='mr-1' />
              <Label htmlFor='terms' className='text-white font-bold text-xs'>
                ACEITO A POLÍTICA DE PRIVACIDADE DE DADOS E OS
                TERMOS E CONDIÇÕES DE USO
              </Label>
            </div>
            <div className='pl-3 pr-3'>
              <Button className='w-full rounded-3xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>QUERO SABER MAIS</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}