import { ResponseInvestidorJson } from "@/models/investidor";
import * as formatters from '../../utils/formatters';

type Props = {
  investidor: ResponseInvestidorJson
}

export function InvestidorCard({ investidor }: Props) {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-1'>
        <input type='checkbox' />
      </div>
      <div className='col-span-1 text-center'>
        <span>{<p>{investidor.id_Investidor}</p>}</span>
      </div>
      <div className='col-span-2 text-blue-800 font-semibold text-center'>
        <span>{<p>{investidor.nome + ' ' + investidor.sobrenome}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{investidor.email}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{investidor.telefone}</p>}</span>
      </div>
      <div className='col-span-1 text-center'>
        <span>{<p>R$ {formatters.formatPrice(investidor.valor_Cotas)}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{formatters.formatDateTimeToPTBR(investidor.data_Cadastro)}</p>}</span>
      </div>
      <div
        className={`col-span-1 text-center rounded-xl font-semibold ${investidor.status === 'Pendente' ? 'bg-yellow-400' :
            investidor.status === 'Recusado' ? 'bg-red-500' :
              investidor.status === 'Aceito' ? 'bg-green-500' : ''
          }`}
      >
        <p>{investidor.status}</p>
      </div>
    </div>
  );
}