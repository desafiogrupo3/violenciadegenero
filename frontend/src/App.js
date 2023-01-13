
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import { Rutas } from './router/rutas';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const menu = useSelector((state) => state.toggleMenu);

  return (
    <div className="App">

      {!menu.active
        ? (
          <div>
            <BrowserRouter>
              <Navbar />
              <Rutas />
            </BrowserRouter>
          </div>
        )
        : (
          <Menu />
        )
      }

    </div>
  );
}

export default App;
