export const formatPrice = (price: number) => {
  const params = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  return Intl.NumberFormat("pt-BR", params).format(price);
};

export const formatDateToPTBR = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR");
};

export const formatDateTimeToPTBR = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  });
};

export const convertData = (data: string) => {
  // Divide a data em dia, mês e ano
  const [dia, mes, ano] = data.split('/');

  // Retorna a data no formato "aaaa-mm-dd"
  return `${ano}-${mes}-${dia}`;
}

export const formatarData = (data: Date): string => {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses são indexados de 0 a 11
  const dia = String(data.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
};