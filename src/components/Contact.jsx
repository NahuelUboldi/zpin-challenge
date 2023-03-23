import whiteLogo from '../assets/img/logo-blanco.png';

function Contact() {
  return (
    <section id='contact' className='text-white py-5'>
      <div className='container '>
        <div className='row text-center py-3'>
          <div className='col-12'>
            <img
              src={whiteLogo}
              alt='logo zpin soluciones tecnológicas para tu empresa'
              width='100px'
            />
            <h2 className='display-3'>contacto</h2>

            <p className='lead'>
              Si estas interesado en alguno de estos servicios puedes
              contactarnos en el siguiente correo:
            </p>
            <p className='lead'>✉ contacto@zpin.tech</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
