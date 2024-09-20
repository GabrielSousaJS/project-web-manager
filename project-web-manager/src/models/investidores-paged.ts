import { ResponseInvestidorJson, ResponseShortInvestidorJson } from './investidor';

export type InvestidoresPaged = {
  investidores: ResponseInvestidorJson[];
  currentPage: number,
  totalPages: number,
}

export type InvestidoresAtivos = {
  investidores: ResponseShortInvestidorJson[];
}