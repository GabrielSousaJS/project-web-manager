import { CapitalSimulation } from "./CapitalSimulation";

export function Simulation() {
  return (
    <section className='container pb-6'>
      <div className="flex flex-col xl:flex-row">
        <div>
          <div className='pb-5'>
            <h1 className='text-3xl font-semibold'>Simule quanto seu dinheiro valoriza* com a RSX Capital</h1>
          </div>
          <div className='pb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            dolorem modi et minima delectus nemo impedit facilis ut optio suscipit.
          </div>
          <div className='pb-5 italic'>
            *Simulação projetada em remuneração de até 36% a.a com aplicação de juros
            simples e considerando as últimas operações da RSX Capital
          </div>
        </div>
        <div className="flex-none">
          <CapitalSimulation />
        </div>
      </div>
    </section>
  );
}