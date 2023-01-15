import React from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../features/toggleMenu'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillChatFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';


const Menu = (props) => {

    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(closeMenu())
    }

    return (
        <div className='menu'>
            <div className='menu-content'>

                <NavLink to='/derechos'><div className='content-button' onClick={() => props.handleClose()}><span>Derechos y recursos disponibles</span></div></NavLink>
                <NavLink to='/necesitantuvoz'><div className='content-button' onClick={() => props.handleClose()}><span>Ellas necesitan tu voz</span></div></NavLink>
                <NavLink to='/detectarsieresvictima'><div className='content-button' onClick={() => props.handleClose()}><span>¿Cómo detectar si eres víctima?</span></div></NavLink>
                <div className='content-bottom-chat' onClick={() => { props.handleShowChat(); }}>

                    <span>Estamos aquí para ayudarte</span>
                    <div className='iconchat'> <BsFillChatFill className="icon" /> Chat</div>

                </div>
                <div className='content-bottom-phone'>
                    <span>Si quieres, llámanos</span>
                    <div className='phone'><AiFillPhone /></div>
                </div>

                <NavLink to='/voluntarios'><div className='content-bottom-voluntario'>
                    <div className='voluntario' onClick={() => props.handleClose()}>
                        <span>Hazte voluntario/a</span>
                    </div>
                </div></NavLink>
            </div>
        </div>
    )
}

export default Menu
