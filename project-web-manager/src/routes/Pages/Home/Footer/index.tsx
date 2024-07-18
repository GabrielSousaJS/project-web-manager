import logo from '../../../../assets/images/short-logo.png'

export function Footer() {
  return (
    <footer className="container flex flex-col md:flex-row md:space-x-6 mb-8">
      <div className='flex-1 pb-6 md:pb-0'>
        <div className='container-logo pb-6'>
          <img src={logo} alt='Logo RSX Capital' />
        </div>
        <div className='text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam
          recusandae, explicabo minus odit tenetur dolorem deleniti, impedit facere
          nam et laborum provident perspiciatis commodi molestiae nesciunt at est
          praesentium. Vitae, explicabo officiis. Ea sequi alias at perferendis
          voluptatum, maxime veniam delectus facilis labore quaerat!
        </div>
      </div>
      <div className='flex-1 pb-6 md:pb-0'>
        <h4 className='font-semibold pb-3'>ONDE ESTAMOS</h4>
        <div className='text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
          quaerat provident natus temporibus error doloribus.
        </div>
      </div>
      <div className='flex-1'>
        <iframe
          title='Localização RSX Capital'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.1508387133016!2d-46.624409536345446!3d-23.582685027140798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6a57fa2403%3A0x1c8dca4543e75da7!2sBuras!5e0!3m2!1spt-BR!2sbr!4v1721207620038!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          loading='lazy'
          className='w-full h-full' />
      </div>
    </footer>
  );
}