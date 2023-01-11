import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';

function App() {

  const menu = useSelector((state) => state.toggleMenu);

  return (
    <div className="App">
      {!menu.active
        ? (
          <Navbar />
        )
        : (
          <Menu />
        )

      }

    </div>
  );
}

export default App;
