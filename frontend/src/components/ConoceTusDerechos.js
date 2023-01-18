import React from 'react';
import { NavLink } from 'react-router-dom';
import cruz from '../img/Cruz Roja.png';
import foto from '../img/foto3.png'
import logo_sara from '../img/logo_sara.png'
import { AiFillPhone } from 'react-icons/ai'

const ConoceTusDerechos = () => {
    return (
        <div id="home" className='cTd'>
            <div>
                <img id="logosara1" src={logo_sara} alt="" />
            </div>
            <div id="photoencabezadocontainer">
                <img id="fotoencabezado" src={foto} alt="" width={"100%"} />
                <div id="tel016">
                    <a href="tel:016">
                        <div>
                            <h3>LLAMA AL 016</h3>
                            <p>Gratuito y no deja rasto</p>
                        </div>

                        <div className='phone'><AiFillPhone /></div>
                    </a>
                </div>
            </div>
            <div>
                <img id="logosara2" src={logo_sara} alt="" />
            </div>
            <div id="restocontainer">
                <div id="noestassola">
                    <h3>CONOCE TUS DERECHOS.</h3>
                </div>
                <div id="textohome1">
                    <p>Tus derechos como mujer son esenciales. Conoce cuáles son y como Cruz Roja puede ayudarte.</p>
                </div>
                <div className="apartados2">
                    <img src={cruz} alt="" />
                    <p>Derecho a la información</p>

                </div>
                <p className='desc'>Servicio 016 y web de recursos de apoyo y prevención ante casos de violencia de género. </p>
                <div className="apartados2">
                    <img src={cruz} alt="" />
                    <p>Derecho a la asistencia social integral</p>
                </div>
                <p className='desc'>Servicios sociales de atención, de emergencia, de apoyo y acogida y de recuperación integral.</p>
                <div className="apartados2">
                    <img src={cruz} alt="" />
                    <p>Derecho a la asistencia jurídica inmediata, gratuita y especializada</p>

                </div>
                <p className='desc'>Asesoramiento y orientación gratuitos. Defensa y representación gratuitas. Exención del pago de tasas judiciales. Asistencia pericial gratuita.
                </p>
                <div className="apartados2">
                    <img src={cruz} alt="" />
                    <p>Derecho a la salud física y mental</p>
                </div>
                <div className="apartados2 ultimo">
                    <img src={cruz} alt="" />
                    <p>Derecho laboral</p>

                </div>
                <p className='desc ultimo'>Derecho a la reducción de la jornada de trabajo, movilidad geográfica, realizar su trabajo total o parcialmente a distancia...
                </p>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>
        </div>
    )
}
export default ConoceTusDerechos
