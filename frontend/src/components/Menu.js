import React from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../features/toggleMenu'
import { AiOutlineClose } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'


const Menu = () => {

    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(closeMenu())
    }

    return (
        <div className='menu'>
            <header>
                <div className='menu-header'>
                    <div className='menu-logo'>Logo</div>
                    <div className='menu-close' onClick={handleClick}><AiOutlineClose /></div>
                </div>
            </header>
            <div className='menu-content'>
                <div className='content-button'><span>Victimas</span></div>
                <div className='content-button'><span>Conoce a Victima</span></div>
                <div className='content-button'><span>No sabe que es Victima</span></div>
                <div className='content-bottom'>
                    <div className='phone'>
                        <FiPhoneCall /> <span>Telefono de Ayuda</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
