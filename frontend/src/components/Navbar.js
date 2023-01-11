import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openMenu } from '../features/toggleMenu'

const Navbar = () => {

    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(openMenu())
    }

    return (
        <nav className='navbar'>
            <div className='navbar-options-container'>
                <div className='navbar-burguer' onClick={handleClick}><AiOutlineMenu /></div>
                <div className='navbar-logo'>Logo</div>
                <div className='navbar-chat'>Chat</div>
            </div>
        </nav>
    )
}

export default Navbar
