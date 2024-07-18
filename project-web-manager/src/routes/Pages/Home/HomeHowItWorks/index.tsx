import { Button } from '@/components/ui/button';
import carPurchase from '../../../../assets/images/car-purchase.png';

export function HomeHowItWorks() {
  function handleButtonClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <section className='container pb-5'>
      <div className='pb-4'>
        <h1 className='text-3xl font-semibold text-center'>Cotas a partir de R$ 1.200</h1>
      </div>
      <div className='flex flex-col xl:flex-row gap-5'>
        <div className='border-2 border-blue-200 rounded-lg p-4'>
          <img src={carPurchase} alt='Compra de carro' className='rounded-lg' />
        </div>
        <div className='border-2 border-blue-200 rounded-lg p-4'>
          <h3 className='text-xl font-semibold pb-3'>Como funciona?</h3>
          <div className='pb-3'>
            <h5 className='text-lg font-semibold pb-2'>Infraestrutura</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt
              totam ratione dolores nostrum sunt quibusdam cumque atque unde maiores!
              Numquam, a quibusdam necessitatibus aliquid libero rerum voluptatum
              ratione repellat.
            </p>
          </div>
          <div className='pb-3'>
            <h5 className='text-lg font-semibold pb-2'>Operação</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt
              totam ratione dolores nostrum sunt quibusdam cumque atque unde maiores!
              Numquam, a quibusdam necessitatibus aliquid libero rerum voluptatum
              ratione repellat.
            </p>
          </div>
          <div className='pb-8'>
            <h5 className='text-lg font-semibold pb-2'>Recebimento</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt
              totam ratione dolores nostrum sunt quibusdam cumque atque unde maiores!
              Numquam, a quibusdam necessitatibus aliquid libero rerum voluptatum
              ratione repellat.
            </p>
          </div>
          <div className='pb-4'>
            <Button className='w-full rounded-3xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg' onClick={handleButtonClick}>SOLICITAR COTAS DE SÓCIO</Button>
          </div>
        </div>
      </div>
    </section>
  );
}