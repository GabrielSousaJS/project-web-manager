import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Pages/Home";
import { CreateUser } from "./routes/Pages/CreateUser";
import { Login } from "./routes/Pages/Login";
import { PosLogin } from "./routes/Pages/PosLogin";
import { PosRegisterUser } from "./routes/Pages/PosRegisterUser";
import { ClienteHome } from "./routes/Pages/Cliente";
import { Pagamento } from "./routes/Pages/Cliente/Pagamento";
import { Cadastro } from "./routes/Pages/Cliente/Cadastros";
import { useEffect, useState } from "react";
import { AccessTokenPayload } from "./models/token";
import * as authService from './services/login-service';
import { ContextToken } from "./utils/context-token";
import { FormPagamento } from "./routes/Pages/Cliente/Pagamento/PagamentoForm";
import { PagamentoEdit } from "./routes/Pages/Cliente/Pagamento/PagamentoEdit";

export function App() {
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayload>();

  useEffect(() => {
    if (authService.isAuthenticated())
      setContextTokenPayload(authService.getAccessTokenPayload());
  }, []);

  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path='login' element={<Login />} />
          <Route path='pos-login' element={<PosLogin />} />
          <Route path='pos-register-user' element={<PosRegisterUser />} />
          <Route path='cliente' element={<ClienteHome />}>
            <Route index element={<Navigate to='/pagamentos' />} />
            <Route path='pagamentos' element={<Pagamento />} />
            <Route path='pagamentos/inserir' element={<FormPagamento />} />
            <Route path='pagamentos/:pagamentoId' element={<PagamentoEdit />} />
            <Route path='cadastros' element={<Cadastro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextToken.Provider>
  );
}
