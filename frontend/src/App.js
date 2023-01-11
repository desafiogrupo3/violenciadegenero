
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import Home from './components/Home';


function App() {

  const menu = useSelector((state) => state.toggleMenu);

  return (
    <div className="App">

      {!menu.active
        ? (
          <Navbar />
          <Home></Home>
        )
        : (
          <Menu />
        )

      }

    </div>
  );
}

export default App;
