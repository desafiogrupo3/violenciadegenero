import React from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../features/toggleMenu'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillChatFill } from 'react-icons/bs'


const Menu = (props) => {

    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(closeMenu())
    }

    return (
        <div className='menu'>
            <div className='menu-content'>
                <div className='content-button'><span>Derechos y recursos disponibles</span></div>
                <div className='content-button'><span>Ellas necesitan tu voz</span></div>
                <div className='content-button'><span>¿Cómo detectar si eres víctima?</span></div>
                <div className='content-bottom-chat'>

                    <span>Estamos aquí para ayudarte</span>
                    <div className='iconchat' onClick={props.handleShowChat}> <BsFillChatFill className="icon" /> Chat</div>

                </div>
                <div className='content-bottom-phone'>
                    <span>Si quieres, llámanos</span>
                    <div className='phone'><AiFillPhone/></div>
                </div>

                <div className='content-bottom-voluntario'>
                    <div className='voluntario'>
                        <span>Hazte voluntario/a</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
