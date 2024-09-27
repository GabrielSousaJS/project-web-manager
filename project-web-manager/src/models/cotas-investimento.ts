export type ResponseCotasInvestimento = {
  id_Cota?: number;
  id_Investidor: number;
  nome: string;
  sobrenome: string;
  valor_Aplicado: number;
  meses_Aplicado: number;
  data_Aplicacao: string;
}

export type ResponseCotaDashboard = {
  id_Cota: number;
  id_Investidor: number;
  nome: string;
  email: string;
  rendimento: number;
  valor_Aplicado: number;
  meses_Aplicado: number;
  data_Aplicacao: string;
}