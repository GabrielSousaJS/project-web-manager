import { Button } from '@/components/ui/button';
import * as loginService from '../../../../services/login-service';
import { useEffect, useState } from 'react';
import { CotasInvestimentoPaged } from '@/models/cotas-investimento-paged';
import * as cotasService from '../../../../services/cotas-investimento-service';
import { Pagination } from '@/components/Pagination';
import { CotaInvestimentoCard } from '@/components/CotaInvestimentoCard';
import { useNavigate } from 'react-router-dom';

export function CotasInvestimento() {
  const [cotasInvestimento, setCotasInvestimento] = useState<CotasInvestimentoPaged>();

  const navigate = useNavigate();

  useEffect(() => {
    if (loginService.isAuthenticated() && loginService.hasAnyRole(['1']))
      getAllCotasInvestimento(0);
    else if (loginService.isAuthenticated())
      getByInvestidorCotasInvestimento(0);
  }, [])

  function getAllCotasInvestimento(pageNumber: number) {
    cotasService.getAllCotasInvestimento(pageNumber + 1).then((response) => {
      setCotasInvestimento(response.data);
    })
  }

  function getByInvestidorCotasInvestimento(pageNumber: number) {
    cotasService.getByInvestidorCotasInvestimento(pageNumber + 1).then((response) => {
      setCotasInvestimento(response.data);
    })
  }

  function handleNavigateForm() {
    navigate('/cliente/cotas/inserir');
  }

  return (
    <main className='container'>
      <div className='flex flex-col lg:flex-row justify-between pb-3 pt-4 border-b-2'>
        <h1 className='text-xl lg:text-4xl font-semibold mb-2 lg:mb-0'>Cotas para Investimento</h1>
        {loginService.isAuthenticated() && loginService.hasAnyRole(['1']) &&
          (
            <div className='space-x-8'>
              <Button onClick={handleNavigateForm}>Adicionar Cota</Button>
            </div>
          )}
      </div>
      <div className='hidden lg:grid lg:grid-cols-12 lg:gap-4 text-sm mt-4 border-b-4 pb-2'>
        <div className='col-span-3 text-center'>
          <span>INVESTIDOR</span>
        </div>
        <div className='col-span-3 text-center'>
          <span>VALOR APLICADO</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>MESES DE APLICAÇÃO</span>
        </div>
        <div className={`${loginService.isAuthenticated() && loginService.hasAnyRole(['1']) ? 'col-span-3' : 'col-span-4'}  text-center`}>
          <span>DATA DE APLICAÇÃO</span>
        </div>
        {loginService.isAuthenticated() && loginService.hasAnyRole(['1']) && (
          <div className='col-span-1 text-center'>
            <span>AÇÃO</span>
          </div>
        )}
      </div>
      <div className='space-y-4 pt-2 mb-4'>
        {cotasInvestimento?.cotasInvestimento.map((cota) => (<div className='border-b-2 pb-2' key={cota.id_Cota}>
          <CotaInvestimentoCard cotaInvestimento={cota} />
        </div>))}
      </div>

      <div className='mb-4'>
        {cotasInvestimento?.cotasInvestimento.length !== 0 && (<Pagination pageCount={cotasInvestimento ? cotasInvestimento.totalPages : 0} range={3} onChange={loginService.hasAnyRole(['1']) ? getAllCotasInvestimento : getByInvestidorCotasInvestimento} />)}
      </div>
    </main>
  );
}