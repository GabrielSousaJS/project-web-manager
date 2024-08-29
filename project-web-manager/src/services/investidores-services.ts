import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";

export function RegisterInvestidor(data: any) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "investidores",
    data,
  };

  return requestBackend(config);
}