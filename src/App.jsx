import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <AboutUs />
      </main>
      <footer>
        <Contact />
        <Footer />
      </footer>
    </>
  );
}

export default App;
