import { ResponseCotasInvestimento } from "@/models/cotas-investimento";
import * as formatters from '../../utils/formatters';
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import * as loginService from '../../services/login-service';

type Props = {
  cotaInvestimento: ResponseCotasInvestimento
}

export function CotaInvestimentoCard({ cotaInvestimento }: Props) {
  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-3 text-center'>
        <span>{<p>{`${cotaInvestimento.nome} ${cotaInvestimento.sobrenome}`}</p>}</span>
      </div>
      <div className='col-span-3 text-center'>
        <span>{<p>R$ {formatters.formatPrice(cotaInvestimento.valor_Aplicado)}</p>}</span>
      </div>
      <div className='col-span-2 text-center'>
        <span>{<p>{cotaInvestimento.meses_Aplicado}</p>}</span>
      </div>
      <div className={`${loginService.isAuthenticated() && loginService.hasAnyRole(['1']) ? 'col-span-3' : 'col-span-4'} text-center`}>
        <span>{<p>{formatters.formatDateTimeToPTBR(cotaInvestimento.data_Aplicacao)}</p>}</span>
      </div>
      {loginService.isAuthenticated() && loginService.hasAnyRole(['1']) && (
        <div className='col-span-1 text-center'>
          <Button onClick={() => { navigate(`/cliente/cotas/${cotaInvestimento.id_Cota}`) }}>Alterar</Button>
        </div>
      )}
    </div>
  );
}