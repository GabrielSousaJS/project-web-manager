import './styles.css';
import logo from '../../assets/images/short-white-logo.png';
import { Link } from 'react-router-dom';
import * as loginService from '../../services/login-service';

export function HeaderUser() {
  return (
    <header className='pt-4 pb-4 bg-gray-800'>
      <div className='flex justify-between align-center center-align container'>
        <div className='container-logo'>
          <img src={logo} alt="Logo RSX Capital" />
        </div>
        <div className='space-x-12'>
          <Link to='#' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Dashboard
          </Link>
          {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) && 
            (<Link to='/cliente/cadastros' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
              Cadastros
            </Link>)}
          <Link to='#' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Rendimentos
          </Link>
          <Link to='/cliente/pagamentos' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Pagamentos
          </Link>
        </div>
      </div>
    </header>
  );
}