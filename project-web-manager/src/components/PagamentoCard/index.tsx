import { ResponsePaymentJson } from "@/models/pagamento";
import * as formatters from '../../utils/formatters';
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import * as loginService from '../../services/login-service';

type Props = {
  pagamentoCard: ResponsePaymentJson
}

export function PagamentoCard({ pagamentoCard }: Props) {
  const navigate = useNavigate();

  return (
    <div className='xl:grid xl:grid-cols-12 xl:gap-4'>
      <div className='col-span-1 text-center'>
        <span>{<p>{pagamentoCard.id_Pagamento}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{pagamentoCard.grupo}</p>}</span>
      </div>
      <div className='col-span-1 text-center'>
        <span>{<p>{pagamentoCard.porcentagem_Pagamento.toString().replace('.', ',') + ' %'}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{pagamentoCard.quantidade_Contemplados}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>R$ {formatters.formatPrice(pagamentoCard.total_Pago)}</p>}</span>
      </div>
      <div
        className={`col-span-1 text-center rounded-xl font-semibold ${pagamentoCard.status === 'Agendado' ? 'bg-yellow-400' :
          pagamentoCard.status === 'Realizado' ? 'bg-green-500' : ''
          }`}
      >
        <p>{pagamentoCard.status}</p>
      </div>
      <div className={`${loginService.isAuthenticated() && loginService.hasAnyRole(['1']) ? 'col-span-2' : 'col-span-3'} text-center`}>
        <span>{<p>{formatters.formatDateToPTBR(pagamentoCard.data_Pagamento)}</p>}</span>
      </div>

      {loginService.isAuthenticated() && loginService.hasAnyRole(['1']) && (
        <div className='col-span-1 text-center'>
          <Button onClick={() => navigate(`/cliente/pagamentos/${pagamentoCard.id_Pagamento}`)}>Corrigir</Button>
        </div>
      )}
    </div>
  );
}