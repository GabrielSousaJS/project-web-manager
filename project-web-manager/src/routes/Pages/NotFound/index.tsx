import { Button } from '@/components/ui/button';
import logo from '../../../assets/images/short-logo.png';
import { useNavigate } from 'react-router-dom';
import * as loginService from '../../../services/login-service';

export function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (loginService.isAuthenticated()) {
      navigate('/cliente/dashboard');
    } else {
      navigate('/');
    }
  }

  return (
    <main className='modal-center-box p-4 rounded-xl'>
      <div className='flex justify-center mb-4'>
        <img src={logo} alt="Logo RSX Capital" />
      </div>

      <div className='text-center mb-4'>
        <h1 className='text-2xl lg:text-3xl font-semibold'>Página não encontrada!</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between'>
        <Button className='mb-3 md:mb-0' onClick={() => navigate(-1)}>Retornar a anteior</Button>
        <Button onClick={handleClick}>Retornar a página inicial</Button>
      </div>
    </main>
  );
}