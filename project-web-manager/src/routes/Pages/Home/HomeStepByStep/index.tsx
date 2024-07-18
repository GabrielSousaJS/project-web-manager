export function HomeStepByStep() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <section className="container">
      <div className="text-center pb-4">
        <h1 className='text-4xl font-semibold'>Como investir</h1>
      </div>
      <div className='text-center pb-4'>
        Acesse nosso sistema exclusivo para sócios cotistas e acompanhe o
        rendimento investido.
      </div>

      <div className='flex flex-col md:flex-row pb-4'>
        <div className='p-3 mb-4 border-2 border-blue-800 rounded-xl md:mr-4 md:mb-0'>
          <h4 className='text-lg font-semibold'>1° PASSO</h4>
          <p>
            Preencha seus dados de contato no formulário acima
            <span className='hover:text-primary hover:font-semibold font-semibold text-blue-600' onClick={handleClick}> clicando aqui.</span>
          </p>
        </div>
        <div className="p-3 mb-4 border-2 border-blue-800 rounded-xl md:mr-4 md:mb-0">
          <h4 className="text-lg font-semibold ">2° PASSO</h4>
          <p>
            Assine o contrato de investimento, realize o pagamento e aguarde a
            ativação da conta.
          </p>
        </div>
        <div className="p-3 mb-4 border-2 border-blue-800 rounded-xl md:mb-0">
          <h4 className="text-lg font-semibold ">3° PASSO</h4>
          <p>
            Assine o contrato de investimento, realize o pagamento e aguarde a
            ativação da conta.
          </p>
        </div>
      </div>
    </section>
  );
}
