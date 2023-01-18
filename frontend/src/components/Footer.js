import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo_cruz_roja.png'

const Footer = () => {
    return (
        <footer>
            <section className='about'>
                <div className='info'>
                    <div className='img-container'><img className='navbar-logo' src={logo} /></div>
                    <div className='lists'>
                        <ul>
                            <h2>Conócenos</h2>
                            <li><a>Sobre Cruz Roja</a></li>
                            <li><a>Nuestra Historia</a></li>
                            <li><a>Transparencia</a></li>
                            <li><a>Calidad</a></li>
                            <li><a>Centro de documentación</a></li>
                        </ul>
                        <ul>
                            <h2>Conócenos</h2>
                            <li><a>Sobre Cruz Roja</a></li>
                            <li><a>Nuestra Historia</a></li>
                            <li><a>Transparencia</a></li>
                            <li><a>Calidad</a></li>
                            <li><a>Centro de documentación</a></li>
                        </ul>
                        <ul>
                            <h2>Conócenos</h2>
                            <li><a>Sobre Cruz Roja</a></li>
                            <li><a>Nuestra Historia</a></li>
                            <li><a>Transparencia</a></li>
                            <li><a>Calidad</a></li>
                            <li><a>Centro de documentación</a></li>
                        </ul>
                    </div>
                </div>
                <div className='copyright'>

                </div>
            </section>
            <section className='otros'>
                <ul>
                    <h2>Conócenos</h2>
                    <li><a>Sobre Cruz Roja</a></li>
                    <li><a>Nuestra Historia</a></li>
                    <li><a>Transparencia</a></li>
                    <li><a>Calidad</a></li>
                    <li><a>Centro de documentación</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer
