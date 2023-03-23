import misionImg from '../assets/img/mision.svg';
import visionImg from '../assets/img/vision.svg';
function AboutUs() {
  return (
    <section id='about-us' className='text-white'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        width={'100%'}
      >
        <path fill='#fff' d='M0,128L1440,224L1440,0L0,0Z' />
      </svg>
      <div className='container'>
        <div className='row text-center py-3'>
          <div className='col-12'>
            <h2 className='display-3'>Sobre Nosotros</h2>
            <div className='heading-line white mb-3'></div>

            <p className='lead'>
              Nuestro equipo multidisciplinario integra una combinación de
              profesionales con una gran experiencia en el sector público y
              privado de diversas industrias, así como por talento joven que se
              distingue por su pasión en aprender.
            </p>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col-12 col-md-6 text-center'>
            <img
              src={misionImg}
              alt='Diseñar e implementar servicios y herramientas tecnológicas'
            />
            <h3 className='h1'>Nuestra Misión</h3>
            <p className='lead'>
              Diseñar e implementar servicios y herramientas tecnológicas que
              ayuden a nuestros clientes a cumplir su propósito.
            </p>
          </div>
          <div className='col-12 col-md-6 text-center'>
            <img src={visionImg} alt='Ser la empresa de referencia' />

            <h3 className='h1'>Nuestra Visión</h3>
            <p className='lead'>
              Ser la empresa de referencia que implementa métodos y herramientas
              innovadoras y disruptivas.
            </p>
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        width={'100%'}
      >
        <path fill='#00235a' d='M0,128L1440,224L1440,320L0,320Z' />
      </svg>
    </section>
  );
}

export default AboutUs;
