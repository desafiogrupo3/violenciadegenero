import React from 'react';
import { NavLink } from 'react-router-dom';
import foto from '../img/foto6.png'
import logo_sara from '../img/logo_sara.png'
import { AiFillPhone } from 'react-icons/ai'

const derechosYrecursos = () => {

    return (
        <div id="home" className='dyr'>
            <div>
                <img id="logosara1" src={logo_sara} alt="" />
            </div>
            <div id="photoencabezadocontainer">
                <img id="fotoencabezado" src={foto} alt="" width={"100%"} />
                <div id="tel016">
                    <div>
                        <h3>LLAMA AL 016</h3>
                        <p>Gratuito y no deja rasto</p>
                    </div>
                    <div className='phone'><AiFillPhone /></div>
                </div>
            </div>
            <div id="restocontainer">
                <div id="noestassola">
                    <h3>TUS DERECHOS SON LO MÁS IMPORTANTE.</h3>
                </div>
                <div id="textohome1">
                    <p>Aquí encontrarás todos los recursos e información que necesitas a la hora de actuar. </p>
                </div>
                <div id="apartadoscontainer">
                    <div className="apartados">
                        <div>
                            <h4>Quiero denunciar</h4>
                            <p>Descubre todas las formas de presentar una denuncia si sufres violencia de género.</p>
                        </div>
                        <NavLink to='/derechos'><button className="vermas" disabled>CÓMO DENUNCIAR</button></NavLink>

                    </div>
                    <div className="apartados">
                        <div>
                            <h4>Recursos y ayudas Sierra Norte</h4>
                            <p>Te mostramos una lista de colaboradores avalados por Cruz Roja en la Sierra Norte de Madrid.</p>
                        </div>
                        <NavLink to='/recursossierranorte'><button className="vermas">VER RECURSOS</button></NavLink>
                    </div>
                    <div className="apartados">
                        <div>
                            <h4>Recursos y ayuda generales</h4>
                            <p>No estás sola. Conoce más acerca de todas las ayudas y recursos a tu disposición.</p>
                        </div>
                        <NavLink to='/derechos'><button className="vermas" disabled>QUIERO SABER MÁS</button></NavLink>
                    </div>
                    <div className="apartados ultimo">
                        <div>
                            <h4>Conoce tus derechos</h4>
                            <p>Tus derechos como mujer son esenciales. Conoce cuáles son y cómo Cruz Roja puede ayudarte.</p>
                        </div>
                        <NavLink to='/conocetusderechos'><button className="vermas">CONOCER MIS DERECHOS</button></NavLink>
                    </div>
                </div>
            </div>

            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>
        </div>
    )
}
export default derechosYrecursos
