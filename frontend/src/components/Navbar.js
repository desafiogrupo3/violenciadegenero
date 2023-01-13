import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openMenu } from '../features/toggleMenu'
import { BsFillChatFill } from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/logo_cruz_roja.jpg'
import Menu from './Menu'
import Chat from './Chat'

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

    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(openMenu())
    }

    return (
        <nav className='navbar'>
            <div className='navbar-options-container'>
                <div className='navbar-burguer' onClick={handleShowMenu}><AiOutlineMenu /></div>
                <div><img className='navbar-logo' src={logo} /></div>
                <div className='navbar-chat' onClick={handleShowChat}> <BsFillChatFill className="icon" /> Chat</div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement={modalPosition}>
                <Offcanvas.Header>
                    <button onClick={() => setShow(false)}>cerrar</button>
                    <Offcanvas.Title>  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {isMenuOrChat === 'menu'
                        ? (
                            <Menu />
                        )
                        : (
                            <Chat />
                        )}
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}

export default Navbar
