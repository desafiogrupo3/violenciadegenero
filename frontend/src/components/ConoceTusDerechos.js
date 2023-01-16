import React from 'react';
import { NavLink } from 'react-router-dom';
import cruz from '../img/Cruz Roja.png';
import foto from '../img/foto3.png'

const ConoceTusDerechos = () => {
    return (
        <div className='dyr'>
            <img id="fotoencabezado" src={foto} alt="" width={"100%"}/>
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
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Derecho a la asistencia social integral</p>
            </div>
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Derecho a la asistencia jurídica inmediata, gratuita y especializada</p>
            </div>
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Derecho a la salud física y mental</p>
            </div>
            <div className="apartados2 ultimo">
                <img src={cruz} alt=""/>
                <p>Derecho laboral</p>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>
        </div>
    )
}
export default ConoceTusDerechos
