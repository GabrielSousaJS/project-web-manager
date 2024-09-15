import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";

export function registerUsuario(data: any) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "user",
    data,
  };

  return requestBackend(config);
}

export async function getAllUsers(page: number) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'user',
    withCredentials: true,
    headers: {
      page
    }
  }

  return await requestBackend(config);
}