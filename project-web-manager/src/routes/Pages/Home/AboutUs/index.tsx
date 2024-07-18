import './styles.css';
import logo from '../../../../assets/images/logo.png';
import { Button } from '@/components/ui/button';

export function AboutUs() {
  function handleButtonClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <section className='container pt-10 pb-10'>
      <div className='container-logo pb-5'>
        <img src={logo} alt='Logo RSX Capital' />
      </div>
      <div className='pb-5'>
        <h1 className='text-3xl font-semibold'>Quem Somos?</h1>
      </div>
      <div className='pb-4'>
        Na RSX Capital, nossa missão é criar oportunidades de que realmente fazem
        a diferença na vida das pessoas. Oferecemos um portfólio diversificado que
        abrange setores como loteamento, marketing, repasse de veículos e educação
        financeira. Queremos proporcionar formas inovadoras e acessíveis para que
        você possa investir em indústrias em crescimento e alcançar seus objetivos
        financeiros.
      </div>
      <div className='pb-4'>
        Acreditamos que cada investimento é uma jornada e, por isso, nos comprometemos
        a acompanhar você em cada etapa, com transparência e dedicação. Nossas cotas
        não só representam a participação nos rendimentos das nossas operações,
        mas também o potencial de crescimento e segurança em setores fundamentais.
      </div>
      <div className='pb-4'>
        Além disso, valorizamos a educação financeira como um pilar essencial
        para o sucesso de nossos investidores. Oferecemos recursos e suporte para
        que você possa tomar decisões informadas e construir um futuro financeiro
        sólido.
      </div>
      <div className='pb-4'>
        A RSX Capital convida você a fazer parte dessa jornada de crescimento e
        transformação. Juntos, vamos semear as sementes que desenvolverão um
        futuro próspero e sustentável para todos.
      </div>
      <div className='pl-3 pr-3 text-center'>
        <Button className='rounded-3xl button-color hover:bg-blue-900 p-6 pb-6 text-lg' onClick={handleButtonClick}>QUERO SER SÓCIO COTISTA</Button>
      </div>
    </section>
  );
}