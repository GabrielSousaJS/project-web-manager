import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ClearUpDoubts() {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false]);

  function handleButtonClick() {
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
      id: 'r1',
      label: 'Como adquirir cotas de investimento da RSX Capital?',
      text: 'Para adiquirir cotas de investimento da RSX Capital, você deve preencher seus dados no formulário no começo do site. Em breve um de nossos consultores irá entrar em contato.'
    },
    {
      id: 'r2',
      label: 'Qual é o valor inicial para investir em cotas da RSX Capital',
      text: 'O valor inicial de investimento é de R$ 1.200 por cota, podendo o investidor ter mais cotas de igual valor.'
    },
    {
      id: 'r3',
      label: 'Quais são os benefícios de investir por meio das cotas da RSX Capital?',
      text: 'Os benefícios incluem potencial de retorno sobre os investimento acima da média do mercado, diversificação de portfólio, partipação no agronegócio com a expertise da Valle Capital na gestão desses investimentos.'
    },
    {
      id: 'r4',
      label: 'Como a RSX gerencia os riscos associados ao investimento em Originação de Grãos?',
      text: 'A RSX Capital possui estratégias e práticas de gestão de riscos para proteger os interesses dos investidores. Isso pode incluir a diversificação de investimentos em diferentes áreas geográficas, o uso de contratos futuros para minimizar a exposição a flutuações de preços e a seleção de fornecedores e compradores nas mais rigidas regas de compliance.'
    }
  ]

  return (
    <section className="container">
      <div className='pb-6'>
        <h1 className='text-5xl font-semibold text-center'>Tire todas as suas dúvidas</h1>
      </div>
      {items.map((item, index) => (
        <div className=" bg-gray-100 rounded-xl rounded-l-none p-4 mb-4 border-l-4 border-primary">
          <div className="flex items-center space-x-2">
            <div>
              <input
                type='checkbox'
                value={item.id}
                id={item.id}
                onChange={handleCheckboxChange(index)}
              />
            </div>
            <Label htmlFor={item.id} className="text-xl font-semibold">
              {item.label}
            </Label>
          </div>
          {checkedItems[index] && (
            <div className="p-4">
              {item.text}
            </div>
          )}
        </div>
      ))}
      <div className='pl-3 pr-3 pb-6 text-center'>
        <Button className='rounded-3xl button-color hover:bg-blue-900 p-6 pb-6 text-lg' onClick={handleButtonClick}>QUERO SER SÓCIO COTISTA</Button>
      </div>
    </section>
  );
}