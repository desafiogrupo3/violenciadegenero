import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openMenu } from '../features/toggleMenu'
import {BsFillChatFill} from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/logo_cruz_roja.jpg';
import Chat from './Chat'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(openMenu())
    }

    return (
        <nav className='navbar'>
            <div className='navbar-options-container'>
                <div className='navbar-burguer' onClick={handleClick}><AiOutlineMenu /></div>
                <div className='navbar-logo'> <img src={logo} alt="" /> </div>
                <div className='navbar-chat' onClick={handleShow}> <BsFillChatFill className="icon"/> Chat</div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header>
                    <button onClick={() => setShow(false)}>cerrar</button>
                    <Offcanvas.Title>  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Chat/>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}

export default Navbar
