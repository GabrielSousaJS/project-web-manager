import { ResponseCotasInvestimento } from './cotas-investimento';

export type CotasInvestimentoPaged = {
  cotasInvestimento: ResponseCotasInvestimento[];
  currentPage: number,
  totalPages: number,
}