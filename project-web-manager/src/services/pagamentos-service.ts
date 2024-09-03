import { ResponsePagamentos } from "@/models/pagamentos";
import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";

export function registerPagamento(data: ResponsePagamentos) {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'pagamentos',
    data,
    withCredentials: true,
  };

  return requestBackend(config);
}

export async function getAllPagamentos(page: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'pagamentos',
    withCredentials: true,
    headers: {
      page
    }
  }

  return await requestBackend(config);
}

export async function addPagamento(data: any) {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'pagamentos',
    withCredentials: true,
    data
  }

  return await requestBackend(config);
}

export async function findPagamentoById(id_Pagamento: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `pagamentos/${id_Pagamento}`,
    withCredentials: true,
  }

  return await requestBackend(config);
}

export async function updatePagamento(id_Pagamento: number, data: string) {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `pagamentos/${id_Pagamento}`,
    data,
    withCredentials: true,
  }

  return await requestBackend(config);
}