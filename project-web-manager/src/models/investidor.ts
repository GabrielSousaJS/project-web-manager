export type ResponseInvestidorJson = {
  id_Investidor?: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  valor_Cotas: number;
  data_Cadastro: string;
  status: string;
}

export type ResponseShortInvestidorJson = {
  id_Investidor: number;
  nome: string;
  sobrenome: string;
  email: string;
}