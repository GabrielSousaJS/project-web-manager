export type ResponsePagamentos = {
  id_pagamento?: number;
  grupo: string;
  porcentagem_Pagamento: number;
  quantidade_Contemplados: number;
  total_Pago: number;
  status: string;
  data_Pagamento: string;
}