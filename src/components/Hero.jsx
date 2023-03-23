import headerImg from '../assets/img/startup.svg';

function Hero() {
  return (
    <section className='hero d-flex flex-grow-1'>
      <div className='container d-flex'>
        <div className='row align-items-center'>
          <div className='col-md-6 text-center text-md-start'>
            <h1 className='display-2'>Tecnología de punta para tu negocio</h1>
            <p className='lead my-5'>
              Soluciones tecnológicas modernas y eficientes para impulsar tus
              procesos. En{' '}
              <span className='highlight-text'>
                Zpin Tech innovamos en el ámbito del software
              </span>{' '}
              para ayudar a nuestros clientes a crecer .
            </p>
            <div className='btn-group'>
              <button className='btn btn-primary'>
                <a href='#contact'>Contáctenos</a>
              </button>
              <button className='btn btn-outline-primary'>
                <a href='#services'>Nuestros Servicios</a>
              </button>
            </div>
          </div>
          <div className='col-md-6 ps-5'>
            <img
              src={headerImg}
              alt='ilustración de cohete saliendo de un celular'
              width={'90%'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
