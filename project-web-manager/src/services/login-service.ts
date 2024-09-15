import { requestBackend } from "@/utils/request-backend";
import { AxiosRequestConfig } from "axios";
import * as accessTokenRepository from '../localStorage/access-token-repository';
import { AccessTokenPayload, RoleEnum } from "@/models/token";
import { jwtDecode } from 'jwt-decode'

export function login(data: any) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "login",
    data,
  };

  return requestBackend(config);
}

export async function disableLogin(id_Usuario: number) {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `login/${id_Usuario}`,
    withCredentials: true,
  }

  return await requestBackend(config);
}

export function saveAccessToken(token: string) {
  accessTokenRepository.saveAuthData(token);
}

export function getAccessToken() {
  return accessTokenRepository.getAuthData();
}

export function logout() {
  accessTokenRepository.removeAuthData();
}

export function getAccessTokenPayload(): AccessTokenPayload | undefined {
  try {
    const token = accessTokenRepository.getAuthData();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayload)
  } catch (error) {
    return undefined;
  }
}

export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();
  return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}


export function hasAnyRole(roles: RoleEnum[]): boolean {
  if (roles.length === 0) {
    return true;
  }

  const tokenPayload = getAccessTokenPayload();

  if (tokenPayload !== undefined) {
    for (let i = 0; i < roles.length; i++) {
      if (tokenPayload.role.includes(roles[i])) {
        return true;
      }
    }
  }

  return false;
}