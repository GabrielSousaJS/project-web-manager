import { Input } from "@/components/ui/input";
import logo from '../../../assets/images/logo.png';
import { Button } from "@/components/ui/button";

export function Login() {
  return (
    <main className='modal-center-box p-4 rounded-xl'>
      <div className='flex justify-center mb-4'>
        <img src={logo} alt="Logo RSX Capital" />
      </div>

      <div className='mb-4'>
        <h4 className='text-3xl'>Login</h4>
      </div>

      <form action="">
        <div className=''>
          <Input placeholder='E-mail' className='mb-4 bg-white text-md p-6 rounded-xl' />
        </div>

        <div className='flex'>
          <Input placeholder='Digite sua senha' className='mb-4 bg-white text-md p-6 rounded-xl' type="password" />
        </div>

        <div className="mb-4 text-end">
          <a href="" className="text-blue-400">Esqueceu a senha?</a>
        </div>

        <div className='text-center'>
        <Button className='w-full rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>CRIAR</Button>
        </div>
      </form>
    </main>
  );
}