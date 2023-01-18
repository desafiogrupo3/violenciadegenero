import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo_cruz_roja.png'
import userIcon from '../img/icon1.png'
import cartIcon from '../img/icon2.png'
import loudIcon from '../img/icon3.png'
import hammerIcon from '../img/icon4.png'
import bagIcon1 from '../img/icon5.png'
import bagIcon2 from '../img/icon6.png'
import iconFacebook from '../img/iconFacebook.png'
import iconTwitter from '../img/IconTwitter.png'
import iconYoutube from '../img/iconYoutube.png'
import iconSocialMedia from '../img/iconSocialMedia.png'
import iconInsta from '../img/iconInsta.png'

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
                            <h2>Actualidad</h2>
                            <li><a>Ahora</a></li>
                            <li><a>Sala de prensa</a></li>
                            <li><a>Campaña</a></li>
                            <li><a>Cruz Roja en Youtube</a></li>
                            <li><a>Revista</a></li>
                        </ul>
                        <ul>
                            <h2>Nuetras Webs</h2>
                            <li><a>Cruz Roja Te Acompaña</a></li>
                            <li><a>La Fuerza V</a></li>
                            <li><a>Cruz Roja Juventud</a></li>
                            <li><a>Orientación Empleo</a></li>
                            <li><a>Migrar.org</a></li>
                            <li><a>Info Prevención VIH ITS TBC</a></li>
                            <li><a>Multicanal SerCuidadorA</a></li>
                            <li><a>F. Tecnologías Sociales</a></li>
                            <li><a>Centros de Medios de Vida</a></li>
                        </ul>
                    </div>
                </div>
                <div className='copyright'>
                    <p>©Cruz Roja Española 2023. Todos los derechos reservados. Pulse <a href='#'>aquí</a> para consultar los ASPECTOS LEGALES</p>
                    <p>Agencia de Colocación autorizada con el número 9900000098</p>
                    <div className='politicas'>
                        <p><a>Contacto</a></p>
                        <p><a>Política de privacidad</a></p>
                        <p><a>Política de Cookies</a></p>
                    </div>
                </div>
            </section>
            <section className='otros'>
                <ul className='otros-content'>
                    <li><img className='icon' src={userIcon} /><a>Intranet</a></li>
                    <li><img className='icon' src={cartIcon} /><a>Tienda Online</a></li>
                    <li><img className='icon' src={loudIcon} /><a>Canal denuncias</a></li>
                    <li><img className='icon' src={hammerIcon} /><a>Licitaciones</a></li>
                    <li>
                        <span>
                            <img className='icon' src={bagIcon1} />
                            <img className='icon' src={bagIcon2} />
                        </span>
                        <a>Trabaja con Cruz Roja</a>
                    </li>
                </ul>
                <div className='social-media'>
                    <h3>Siguenos</h3>
                    <a><img className='icon' src={iconFacebook} /></a>
                    <a><img className='icon' src={iconTwitter} /></a>
                    <a><img className='icon' src={iconYoutube} /></a>
                    <a><img className='icon' src={iconInsta} /></a>
                    <a><img className='icon' src={iconSocialMedia} /></a>
                </div>
            </section>
        </footer>
    )
}

export default Footer
