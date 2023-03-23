import Hero from './Hero';
import Navbar from './Navbar';

function Header() {
  return (
    <header className='site-header d-flex flex-column'>
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
