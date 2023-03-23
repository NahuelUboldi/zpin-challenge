import logo from '../assets/img/logo-zpin.png';

function Navbar() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <nav className='navbar navbar-expand-lg bg-transparent'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='#'>
                <img
                  src={logo}
                  alt='logo zpin soluciones tecnológicas para tu empresa'
                  width='100px'
                />
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav ms-auto'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#services'
                  >
                    Servicios
                  </a>
                  <a className='nav-link' href='#about-us'>
                    Sobre nosotros
                  </a>
                  <a className='nav-link' href='#contact'>
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
