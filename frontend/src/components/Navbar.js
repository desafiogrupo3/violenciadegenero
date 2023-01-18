import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillChatFill } from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/logo_cruz_roja.png'
import Menu from './Menu'
import Chat from './Chat'
import { FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const [isMenuOrChat, setIsMenuOrChat] = useState('menu');
    const [modalPosition, setModalPosition] = useState('start')
    const handleClose = () => setShow(false);
    const handleShowMenu = () => {
        setShow(true)
        setModalPosition('start')
        setIsMenuOrChat('menu')
    };
    const handleShowChat = () => {
        setShow(true)
        setModalPosition('end')
        setIsMenuOrChat('chat')
    };

    return (
        <nav className='navbar'>
            <div className='navbar-options-container'>
                <div className='navbar-burguer' onClick={handleShowMenu}><AiOutlineMenu /></div>
                <div><NavLink to='/home'><img className='navbar-logo' src={logo} /></NavLink></div>
                <div className='navbar-chat' onClick={handleShowChat}> <BsFillChatFill className="icon" /> Chat</div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement={modalPosition}>
                <Offcanvas.Header className={"header" + isMenuOrChat}>
                    {isMenuOrChat === 'menu'
                        ? (
                            <div>
                                <div id="cerrarmenu" onClick={handleClose}><FiX /></div>
                                <div><img className='navbar-logo' src={logo} /></div>
                            </div>
                        )
                        : (
                            <div>
                                <div>
                                    <div className='iconchat'> <BsFillChatFill className="icon" /> Chat</div>
                                    <Offcanvas.Title>Ahora estás chateando</Offcanvas.Title>
                                </div>

                                <div onClick={handleClose} id="cerrarchat"><FiX /></div>
                            </div>
                        )}

                </Offcanvas.Header>
                <Offcanvas.Body>
                    {isMenuOrChat === 'menu'
                        ? (
                            <Menu handleShowChat={handleShowChat} handleClose={handleClose}/>
                        )
                        : (
                            <Chat handleClose={handleClose}/>
                        )}
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}

export default Navbar
