import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";

export function registerInvestidor(data: any) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "investidores",
    data,
  };

  return requestBackend(config);
}

export async function getAllInvestidores(page: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'investidores',
    withCredentials: true,
    headers: {
      page
    }
  }

  return await requestBackend(config);
}

export async function acceptInvestidor(id: number, data: any) {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `investidores/${id}/accept`,
    withCredentials: true,
    data,
  };

  return await requestBackend(config);
}

export async function refuseInvestidor(id: number, data: any) {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `investidores/${id}/refuse`,
    withCredentials: true,
    data,
  };

  return await requestBackend(config);
}