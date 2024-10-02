import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Pages/Home';
import { CreateUser } from './routes/Pages/CreateUser';
import { Login } from './routes/Pages/Login';
import { PosLogin } from './routes/Pages/PosLogin';
import { PosRegisterUser } from './routes/Pages/PosRegisterUser';
import { ClienteHome } from './routes/Pages/Cliente';
import { Pagamento } from './routes/Pages/Cliente/Pagamento';
import { Cadastro } from './routes/Pages/Cliente/Cadastros';
import { useEffect, useState } from 'react';
import { AccessTokenPayload } from './models/token';
import * as authService from './services/login-service';
import { ContextToken } from './utils/context-token';
import { FormPagamento } from './routes/Pages/Cliente/Pagamento/PagamentoForm';
import { PagamentoEdit } from './routes/Pages/Cliente/Pagamento/PagamentoEdit';
import { CotasInvestimento } from './routes/Pages/Cliente/CotasInvestimento';
import { CotasInvestimentoForm } from './routes/Pages/Cliente/CotasInvestimento/CotasInvestimentoForm';
import { CotasInvestimentoEdit } from './routes/Pages/Cliente/CotasInvestimento/CotasInvestimentoEdit';
import { Dashboard } from './routes/Pages/Cliente/Dashboard';
import Usuarios from './routes/Pages/Cliente/Usuarios';
import { NotFound } from './routes/Pages/NotFound';
import { PrivateRoute } from './components/PrivateRoute';

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
          <Route path='/' element={<Home />} />
          <Route path='create-user' element={<CreateUser />} />
          <Route path='login' element={<Login />} />
          <Route path='pos-login'
            element={
              <PrivateRoute>
                <PosLogin />
              </PrivateRoute>
            } />
          <Route path='pos-register-user' element={<PosRegisterUser />} />
          <Route path='cliente' element={<ClienteHome />}>
            <Route index element={<Navigate to='/dashboard' />} />
            <Route path='dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
            <Route path='pagamentos'
              element={
                <PrivateRoute>
                  <Pagamento />
                </PrivateRoute>} />
            <Route path='pagamentos/inserir'
              element={
                <PrivateRoute roles={['1']}>
                  <FormPagamento />
                </PrivateRoute>
              } />
            <Route path='pagamentos/:pagamentoId'
              element={
                <PrivateRoute roles={['1']}>
                  <PagamentoEdit />
                </PrivateRoute>
              } />
            <Route path='cadastros'
              element={
                <PrivateRoute roles={['1']}>
                  <Cadastro />
                </PrivateRoute>
              } />
            <Route path='cotas'
              element={
                <PrivateRoute>
                  <CotasInvestimento />
                </PrivateRoute>
              } />
            <Route path='cotas/inserir'
              element={
                <PrivateRoute roles={['1']}>
                  <CotasInvestimentoForm />
                </PrivateRoute>
              } />
            <Route path='cotas/:cotasId'
              element={
                <PrivateRoute roles={['1']}>
                  <CotasInvestimentoEdit />
                </PrivateRoute>} />
            <Route path='usuarios'
              element={
                <PrivateRoute roles={['1']}>
                  <Usuarios />
                </PrivateRoute>
              } />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextToken.Provider>
  );
}
