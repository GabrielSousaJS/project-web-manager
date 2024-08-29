export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    borderRadius: "0.75rem", // Equivalente a rounded-xl
    paddingLeft: "1rem", // Equivalente a pl-4
    paddingRight: "1rem", // Equivalente a pr-4
    paddingTop: "0.75rem", // Equivalente a pt-3
    paddingBottom: "0.75rem", // Equivalente a pb-3
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo customizada
    width: "100%", // Equivalente a w-full
    color: "#fff", // Para garantir que o texto do select seja branco
    fontSize: "1rem", // Equivalente a text-md
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#fff",
    fontWeight: "bold", // Texto do placeholder em negrito
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#fff", // Texto branco
    backgroundColor: state.isSelected ? "#1E3A8A" : "#000", // Fundo azul para item selecionado, preto para os demais
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? "#000093" : "#1E1E1E", // Fundo cinza escuro ao hover, mas azul se selecionado
    },
    paddingLeft: "1rem", // Equivalente a pl-4
    paddingRight: "1rem", // Equivalente a pr-4
    paddingTop: "0.75rem", // Equivalente a pt-3
    paddingBottom: "0.75rem", // Equivalente a pb-3
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#fff'
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#000", // Fundo preto
    border: "none", // Remove qualquer borda
    margin: "0", // Remove qualquer margem
    boxShadow: "none", // Remove sombras
    borderRadius: "0.375rem", // Mantém bordas arredondadas
    padding: "0", // Remove qualquer padding
  }),
};
