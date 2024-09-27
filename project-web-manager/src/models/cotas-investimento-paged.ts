import { ResponseCotaDashboard, ResponseCotasInvestimento } from './cotas-investimento';

export type CotasInvestimentoPaged = {
  cotasInvestimento: ResponseCotasInvestimento[];
  currentPage: number,
  totalPages: number,
}

export type CotasInvestimentoDashboard = {
  cotasInvestimento: ResponseCotaDashboard[];
  currentPage: number,
  totalPages: number,
}