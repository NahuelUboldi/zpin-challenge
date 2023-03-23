import services from '../data/services';
import Service from './Service';

function Services() {
  return (
    <section id='services' className=' d-flex flex-column py-5'>
      <div className='container pt-5'>
        <div className='row pt-5'>
          <div className='col-12 text-center'>
            <h2 className='display-3 main-color'>Nuestros Servicios</h2>
            <div className='heading-line mb-3'></div>
            <p className='lead'>
              Proporcionamos soluciones administrativas y tecnológicas en
              esquema modular o general para personas morales o físicas
            </p>
          </div>
        </div>
      </div>
      <div className='container flex-grow-1'>
        <div className='row'>
          <div className='col-12'>
            {services.map((item, index) => {
              return <Service item={item} index={index} key={item.title} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
