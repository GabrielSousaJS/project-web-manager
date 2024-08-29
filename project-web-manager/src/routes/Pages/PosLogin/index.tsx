import './styles.css'

import logo from '../../../assets/images/logo.png'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function PosLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate])

  return (
    <main className='bg-image bg-cover pt-10 pb-10 h-screen'>
      <div className='modal-center-box-register'>
        <div className='container'>
          <div className='flex-1'>
            <div className='container-logo pb-6'>
              <img src={logo} alt='Logo RSX Capital' />
            </div>
            <div className='pb-4'>
              <h1 className='text-4xl font-bold text-white'>
                <span className='text-bg pl-3 pr-3 rounded-md'>
                  Tudo certo!
                </span>
              </h1>
              <h1 className='text-4xl mb-4 font-bold text-white'>
                <span className='text-bg pl-3 pr-3 rounded-md'>
                  Recebemos seu contato
                </span>
              </h1>
              <p className='text-white pl-3 pr-3'>
                Em breve um de nossos consultores entrará em contato
              </p>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}