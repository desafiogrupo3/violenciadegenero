
import Navbar from './components/Navbar';
import { Rutas } from './router/rutas';
import { BrowserRouter } from 'react-router-dom';

function App() {

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
}

export default App;
