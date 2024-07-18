import { Button } from '@/components/ui/button';
import house from '../../../../assets/images/house.png';

export function Capitation() {
  function handleButtonClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <section className='container flex flex-col md:flex-row-reverse items-center justify-between gap-6'>
      <div className='flex-2'>
        <div className='pb-6'>
          <img src={house} alt="Molde de casa" className='rounded-lg' />
        </div>
      </div>
      <div className='flex-2'>
        <div className='pb-4'>
          <h1 className='text-3xl font-semibold'>Investir em Imóveis sempre será a melhor opção</h1>
        </div>
        <div className='pb-6'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            voluptatibus aperiam numquam recusandae, accusantium corporis quos a
            reiciendis cumque, est sequi. Quaerat harum cupiditate amet exercitationem,
          </p>
        </div>
        <div className='pb-4'>
          <Button className='w-full rounded-3xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg' onClick={handleButtonClick}>QUERO SER SÓCIO COTISTA</Button>
        </div>
      </div>
    </section>
  );
}