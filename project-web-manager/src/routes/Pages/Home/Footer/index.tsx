import logo from '../../../../assets/images/short-logo.png'

export function Footer() {
  return (
    <footer className="container flex flex-col md:flex-row md:space-x-6 mb-8">
      <div className='flex-1 pb-6 md:pb-0'>
        <div className='container-logo pb-6'>
          <img src={logo} alt='Logo RSX Capital' />
        </div>
        <div className='text-sm'>
        Além disso, valorizamos a educação financeira como um pilar essencial
        para o sucesso de nossos investidores. Oferecemos recursos e suporte para
        que você possa tomar decisões informadas e construir um futuro financeiro
        sólido.
        </div>
      </div>
      <div className='flex-1'>
        <iframe
          title='Localização RSX Capital'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.4141426963555!2d-47.935434046044016!3d-15.867597369174598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2f9df671b1ab%3A0x222412246d541c11!2sEPAR%2C%202915%20-%20Bras%C3%ADlia%2C%20DF%2C%2070297-400!5e0!3m2!1spt-BR!2sbr!4v1724886689750!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          loading='lazy'
          className='w-full h-full' />
      </div>
    </footer>
  );
}