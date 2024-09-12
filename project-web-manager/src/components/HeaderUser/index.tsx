import './styles.css';
import { useState } from 'react';
import logo from '../../assets/images/short-white-logo.png';
import { Link } from 'react-router-dom';
import * as loginService from '../../services/login-service';

export function HeaderUser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-gray-800 pt-4 pb-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='container-logo'>
          <img src={logo} alt="Logo RSX Capital" className='w-32' />
        </div>

        {/* Menu for larger screens */}
        <nav className='hidden md:flex space-x-12'>
          <Link to='/cliente/dashboard' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Dashboard
          </Link>
          {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) && 
            (<Link to='/cliente/cadastros' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
              Cadastros
            </Link>)}
          <Link to='/cliente/cotas' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Cotas
          </Link>
          <Link to='/cliente/pagamentos' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl'>
            Pagamentos
          </Link>
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
              <Link to='/cliente/dashboard' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              {loginService.isAuthenticated() && loginService.hasAnyRole(["1"]) && 
                (<Link to='/cliente/cadastros' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                  Cadastros
                </Link>)}
              <Link to='/cliente/cotas' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                Cotas
              </Link>
              <Link to='/cliente/pagamentos' className='font-semibold text-white hover:bg-blue-800 p-3 hover:rounded-xl' onClick={() => setIsMenuOpen(false)}>
                Pagamentos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}