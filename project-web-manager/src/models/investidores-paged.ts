import { ResponseInvestidorJson } from './investidor';

export type InvestidoresPaged = {
  investidores: ResponseInvestidorJson[];
  currentPage: number,
  totalPages: number,
}