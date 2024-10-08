import { ResponseInvestidorJson } from "@/models/investidor";
import * as formatters from '../../utils/formatters';
import { Button } from "../ui/button";
import * as investidoresService from '../../services/investidores-services';

type Props = {
  investidor: ResponseInvestidorJson
}

export function InvestidorCard({ investidor }: Props) {
  function handleAcceptInvestidor() {
    let requestBody = {
      status: 'Aceito',
    };

    let response = investidoresService.acceptInvestidor(Number(investidor.id_Investidor), requestBody)

    response.then(() => window.location.reload())
  }

  function handleRefuseInvestidor() {
    let requestBody = {
      status: 'Recusado',
    };

    let response = investidoresService.acceptInvestidor(Number(investidor.id_Investidor), requestBody)

    response.then(() => window.location.reload())
  }

  return (
    <div className='xl:grid xl:grid-cols-12 gap-4 center-align'>
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
        className={`col-span-1 text-center rounded-xl font-semibold mb-2 xl:mb-0 ${investidor.status === 'Pendente' ? 'bg-yellow-400' :
          investidor.status === 'Recusado' ? 'bg-red-500' :
            investidor.status === 'Aceito' ? 'bg-green-500' : ''
          }`}
      >
        <p>{investidor.status}</p>
      </div>

      <div className='flex justify-between col-span-2'>
        <Button onClick={handleAcceptInvestidor}>Aceitar</Button>
        <Button onClick={handleRefuseInvestidor}>Recusar</Button>
      </div>
    </div>
  );
}