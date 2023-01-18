
import Navbar from './components/Navbar';
import { Rutas } from './router/rutas';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import NavBarDesktop from './components/NavBarDesktop';
import Footer from './components/Footer';

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(max-width: 759px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 760)",
  });

  if (isMobileDevice) {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Navbar />
            <Rutas />
          </BrowserRouter>
        </div>
      </div>
    );
  }else{
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <NavBarDesktop/>
            <Rutas />
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
