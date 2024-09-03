import { ResponsePaymentJson } from "@/models/pagamento";
import * as formatters from '../../utils/formatters';
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type Props = {
  pagamento: ResponsePaymentJson
}

export function PagamentoCard({ pagamento }: Props) {
  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-1 text-center'>
        <span>{<p>{pagamento.id_Pagamento}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{pagamento.grupo}</p>}</span>
      </div>
      <div className='col-span-1 text-center'>
        <span>{<p>{pagamento.porcentagem_Pagamento.toString().replace('.', ',') + ' %'}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{pagamento.quantidade_Contemplados}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>R$ {formatters.formatPrice(pagamento.total_Pago)}</p>}</span>
      </div>
      <div
        className={`col-span-1 text-center rounded-xl font-semibold ${pagamento.status === 'Agendado' ? 'bg-yellow-400' :
          pagamento.status === 'Realizado' ? 'bg-green-500' : ''
          }`}
      >
        <p>{pagamento.status}</p>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{formatters.formatDateToPTBR(pagamento.data_Pagamento)}</p>}</span>
      </div>
      <div className='col-span-1 text-center'>
        <Button onClick={() => navigate(`/cliente/pagamentos/${pagamento.id_Pagamento}`)}>Corrigir</Button>
      </div>
    </div>
  );
}