import { ResponseCotasInvestimento } from './cotas-investimento';

export type CotasInvestimentoPaged = {
  cotasInvestimentos: ResponseCotasInvestimento[];
  currentPage: number,
  totalPages: number,
}