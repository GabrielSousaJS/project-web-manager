import { InvestidorCard } from "@/components/InvestidorCard";
import { useEffect, useState } from "react";
import * as investidorService from '../../../../services/investidores-services';
import * as loginService from '../../../../services/login-service';
import { InvestidoresPaged } from "@/models/investidores-paged";
import { Pagination } from "@/components/Pagination";

export function Cadastro() {
  const [investidores, setInvestidores] = useState<InvestidoresPaged>();

  useEffect(() => {
    if (loginService.isAuthenticated()) {
      getAllInvestidores(0);
    }
  }, [])

  function getAllInvestidores(pageNumber: number) {
    investidorService.getAllInvestidores(pageNumber + 1).then((response) => {
      setInvestidores(response.data);
    })
  }

  return (
    <main className='container'>
      <div className='flex justify-between pb-3 pt-4 border-b-2'>
        <h1 className="text-4xl font-semibold">Cadastros</h1>
      </div>
      <div className='grid grid-cols-12 gap-4 text-sm mt-4 border-b-4 pb-2'>
        <div className='col-span-2 text-center'>
          <span>NOME</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>E-MAIL</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>TELEFONE</span>
        </div>
        <div className='col-span-1 text-center'>
          <span>VALOR COTAS</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>DT. CADASTRO</span>
        </div>
        <div className='col-span-1 text-center'>
          <span>STATUS</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>AÇÃO</span>
        </div>
      </div>
      <div className='space-y-4 pt-2 mb-4'>
        {investidores?.investidores.map((investidor) => (<div className='border-b-2 pb-2' key={investidor.id_Investidor}>
          <InvestidorCard investidor={investidor} />
        </div>))}
      </div>

      <div className='mb-4'>
        {investidores?.investidores.length !== 0 && (<Pagination pageCount={investidores ? investidores.totalPages : 0} range={3} onChange={getAllInvestidores} />)}
      </div>
    </main>
  );
}