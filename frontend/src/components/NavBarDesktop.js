import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../img/logo_cruz_roja.png'

const NavBarDesktop = () => {
  return (
    <nav className='navbarDesktop'>
      <NavLink className='logo' to='/Home'><img className='navbar-logo' src={logo} /></NavLink>
      <NavLink className='link' to='/recursossierranorte'>Derechos y Recursos Disponibles</NavLink>
      <NavLink className='link' to='/necesitantuvoz'>Ellas necesitan tu voz</NavLink>
      <NavLink className='link' to='/detectarsieresvictima'>Como detectar si eres victima</NavLink>
      <NavLink className='link' to='/voluntarios'>Hazte Voluntario</NavLink>
    </nav>
  )
}

export default NavBarDesktop
