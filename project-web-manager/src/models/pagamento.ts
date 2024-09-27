export type ResponsePaymentJson = {
  id_Pagamento?: number;
  id_Investidor?: number;
  grupo: string;
  porcentagem_Pagamento: number;
  quantidade_Contemplados: number;
  total_Pago: number;
  status: string;
  data_Pagamento: string;
}