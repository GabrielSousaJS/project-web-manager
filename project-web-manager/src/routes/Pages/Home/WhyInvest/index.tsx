import './styles.css'
import { LucideArrowRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function WhyInvest() {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  function handleDivRequestCotasClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleCheckboxChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = event.target.checked;
    setCheckedItems(newCheckedItems);
  };

  const items = [
    {
      id: 'w1',
      label: 'Aumente os seus "dividendos"',
      text: 'Para adiquirir cotas de investimento da RSX Capital, você deve preencher seus dados no formulário no começo do site. Em breve um de nossos consultores irá entrar em contato.'
    },
    {
      id: 'w2',
      label: 'Proteja seu patrimônio',
      text: 'Investir em imóveis é uma excelente maneira de proteger seu patrimônio contra a inflação e diversificar sua carteira de investimentos.'
    },
  ]

  return (
    <section className='container pb-8'>
      <div className='bg-image-why-invest p-4 rounded-xl'>
        <h2 className='font-bold text-white pb-4 text-3xl'>
          Porque investir na RSX Capital?
        </h2>
        <div className='text-white font-semibold pb-4'>
          É um dos setores mias dinâmicos da economia global. Com o crescimento
          sustentável e demanda crescente.
        </div>
        {items.map((item, index) => (
          <div className=' bg-gray-100 rounded-xl rounded-l-none p-4 mb-4 border-l-4 border-primary'>
            <div className='flex items-center space-x-2'>
              <div>
                <input
                  type='checkbox'
                  value={item.id}
                  id={item.id}
                  onChange={handleCheckboxChange(index)}
                />
              </div>
              <Label htmlFor={item.id} className='text-xl font-semibold'>
                {item.label}
              </Label>
            </div>
            {checkedItems[index] && (
              <div className='p-4'>
                {item.text}
              </div>
            )}
          </div>
        ))}
        <div className='flex items-center space-x-2' onClick={handleDivRequestCotasClick}>
          <h3 className='text-xl font-bold text-white'>SOLICITAR COTA</h3>
          <LucideArrowRight className='text-white' />
        </div>
      </div>
    </section>
  );
}