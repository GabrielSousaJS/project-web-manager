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

function formatDataPTBR(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses em JavaScript são indexados de 0 a 11
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}