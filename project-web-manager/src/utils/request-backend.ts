import { BASE_URL } from "./system";

import axios, { AxiosRequestConfig } from "axios";
import * as loginService from '../services/login-service';

export function requestBackend(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: `Bearer ${loginService.getAccessToken()}`,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}

export async function requestAsyncBackend(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: `Bearer ${loginService.getAccessToken()}`,
      }
    : config.headers;

  return await axios({ ...config, baseURL: BASE_URL, headers });
}