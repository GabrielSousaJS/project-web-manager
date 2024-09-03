import { ResponsePagamentos } from "./pagamentos";

export type PagamentosPaged = {
  pagamentos: ResponsePagamentos[];
  currentPage: number,
  totalPages: number,
}