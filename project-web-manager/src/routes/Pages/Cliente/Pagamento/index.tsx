import { PagamentoCard } from "@/components/PagamentoCard";
import { Button } from "@/components/ui/button";
import { PagamentosPaged } from "@/models/pagamentos-paged";
import { useEffect, useState } from "react";
import * as pagamentosService from '../../../../services/pagamentos-service';
import * as loginService from '../../../../services/login-service';
import { Pagination } from "@/components/Pagination";
import { useNavigate } from "react-router-dom";

export function Pagamento() {
  const [pagamentos, setPagamentos] = useState<PagamentosPaged>();

  useEffect(() => {
    if (loginService.isAuthenticated()) {
      getAllPagamentos(0);
    }
  }, [])

  function getAllPagamentos(pageNumber: number) {
    pagamentosService.getAllPagamentos(pageNumber + 1).then((response) => {
      setPagamentos(response.data);
    })
  }

  const navigate = useNavigate();

  function handleNavigateForm() {
    navigate('/cliente/pagamentos/inserir');
  }

  return (
    <main className='container'>
      <div className='flex justify-between flex-col xl:flex-row pb-3 pt-4 border-b-2'>
        <h1 className="text-xl lg:text-4xl font-semibold mb-2 xl:mb-0">Pagamentos</h1>
        {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) &&
          (
            <div className='space-x-8'>
              <Button onClick={handleNavigateForm}>Adicionar lançamento</Button>
            </div>
          )}
      </div>
      <div className='hidden xl:grid xl:grid-cols-12 xl:gap-4 text-sm mt-4 border-b-4 pb-2'>
        <div className='col-span-1 text-center'>
          <span>ID PAGAMENTO</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>GRUPO</span>
        </div>
        <div className='col-span-1 text-center'>
          <span>% DE PAGAMENTO</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>QTD. DE CONTEMPLADOS</span>
        </div>
        <div className='col-span-2 text-center'>
          <span>TOTAL PAGO</span>
        </div>
        <div className='col-span-1 text-center'>
          <span>STATUS</span>
        </div>
        <div className={`${loginService.isAuthenticated() && loginService.hasAnyRole(['1']) ? 'col-span-2' : 'col-span-3'} text-center`}>
          <span>DT. PAGAMENTO</span>
        </div>
        {loginService.isAuthenticated() && loginService.hasAnyRole(['1']) && (
          <div className="col-span-1 text-center">
            <span>AÇÃO</span>
          </div>
        )}
      </div>
      <div className='space-y-4 pt-2 mb-4'>
        {pagamentos?.pagamentos.map((pagamento) => (<div className='border-b-2 pb-2' key={pagamento.id_pagamento}>
          <PagamentoCard pagamento={pagamento} />
        </div>))}
      </div>

      <div className='mb-4'>
        {pagamentos?.pagamentos.length !== 0 && (<Pagination pageCount={pagamentos ? pagamentos.totalPages : 0} range={3} onChange={getAllPagamentos} />)}
      </div>
    </main>
  );
}