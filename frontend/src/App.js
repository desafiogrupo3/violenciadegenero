
import Navbar from './components/Navbar';
import { Rutas } from './router/rutas';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import NavBarDesktop from './components/NavBarDesktop';
import Footer from './components/Footer';
import { BsFillChatFill } from 'react-icons/bs'
import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiX } from 'react-icons/fi'
import Chat from './components/Chat'

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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
  } else {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <NavBarDesktop />
            <Rutas />
            <button id="chatdeskpot" onClick={()=>setShow(true)}>+ Estamos aquí para ayudarte <div className='navbar-chat' > <BsFillChatFill className="icon" /> Chat</div></button>
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
              <Offcanvas.Header className={"header" + "chat"}>
                <div>
                  <div>
                    <div className='iconchat'> <BsFillChatFill className="icon" /> Chat</div>
                    <Offcanvas.Title>Ahora estás chateando</Offcanvas.Title>
                  </div>

                  <div onClick={handleClose} id="cerrarchat"><FiX /></div>
                </div>

              </Offcanvas.Header>
              <Offcanvas.Body>
                <Chat handleClose={handleClose} />
              </Offcanvas.Body>
            </Offcanvas>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
