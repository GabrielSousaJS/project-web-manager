import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";

export async function getAllCotasInvestimento(page: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'cotasinvestimento',
    withCredentials: true,
    headers: {
      page
    }
  };

  return await requestBackend(config);
}

export async function getByInvestidorCotasInvestimento(page: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'cotasinvestimento/investidor',
    withCredentials: true,
    headers: {
      page
    }
  };

  return await requestBackend(config);
}

export async function getByIdCotaInvestimento(id_Cota: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `cotasinvestimento/${id_Cota}`,
    withCredentials: true,
  }

  return await requestBackend(config);
}

export async function registerCotaInvestimento(data: any) {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'cotasinvestimento',
    withCredentials: true,
    data
  }

  return requestBackend(config);
}

export async function updateCotaInvestimento(id_Cota: number, data: any) {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `cotasinvestimento/${id_Cota}`,
    data,
    withCredentials: true,
  }

  return await requestBackend(config);
}