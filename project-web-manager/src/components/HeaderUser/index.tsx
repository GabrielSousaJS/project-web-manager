import './styles.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/short-white-logo.png';
import * as loginService from '../../services/login-service';

export function HeaderUser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    loginService.logout();
  }

  return (
    <header className='bg-gray-800 pt-4 pb-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <NavLink to='/cliente/dashboard'>
          <div className='container-logo'>
            <img src={logo} alt="Logo RSX Capital" className='w-32' />
          </div>
        </NavLink>

        {/* Menu for larger screens */}
        <nav className='hidden md:flex space-x-12'>
          <NavLink to='/cliente/dashboard' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Dashboard
          </NavLink>
          {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) &&
            (<NavLink to='/cliente/cadastros' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
              Cadastros
            </NavLink>)}
          <NavLink to='/cliente/cotas' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Cotas
          </NavLink>
          <NavLink to='/cliente/pagamentos' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Pagamentos
          </NavLink>
          {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) &&
            (<NavLink to='/cliente/usuarios' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
              Usuários
            </NavLink>)}
          <NavLink to='/login' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={handleLogOut}>
            Sair
          </NavLink>
        </nav>

        {/* Hamburger button for mobile */}
        <button
          className='md:hidden text-white focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className='md:hidden absolute top-16 left-0 w-full bg-gray-800'>
            <div className='flex flex-col items-center space-y-4 py-4'>
              <NavLink to='/cliente/dashboard' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </NavLink>
              {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) &&
                (<NavLink to='/cliente/cadastros' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                  Cadastros
                </NavLink>)}
              <NavLink to='/cliente/cotas' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                Cotas
              </NavLink>
              <NavLink to='/cliente/pagamentos' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                Pagamentos
              </NavLink>
              {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) &&
                (<NavLink to='/cliente/usuarios' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                  Usuários
                </NavLink>)}
              <NavLink to='/login' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={handleLogOut}>
                Sair
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}