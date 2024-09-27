import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";

export async function getDashboardAdmin(page: number, initialDate: string, finalDate: string) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'dashboard/admin',
    withCredentials: true,
    headers: {
      page,
      initialDate,
      finalDate,
    }
  }

  return await requestBackend(config);
}

export async function getDashboardInvestidor(page: number, initialDate: string, finalDate: string) {
 const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'dashboard/investidor',
    withCredentials: true,
    headers: {
      page,
      initialDate,
      finalDate,
    }
 }

 return await requestBackend(config);
}