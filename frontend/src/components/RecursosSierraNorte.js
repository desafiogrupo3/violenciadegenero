import React from 'react';
import { NavLink } from 'react-router-dom';
import foto from '../img/foto1.png'
import cruz from '../img/Cruz Roja.png'
import Map from './Map';
const RecursosSN = () => {
    return (
        <div className='dyr'>
            <Map></Map>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192831.31408033273!2d-3.717341323241185!3d40.95981362486439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43e119fd216bb7%3A0x7daed32de71906a!2sSierra%20Norte%2C%20Madrid!5e0!3m2!1ses!2ses!4v1673447277598!5m2!1ses!2ses" width="100%" height="200" loading="lazy"></iframe> */}
            <div id="noestassola">
                <h3>RECURSOS Y AYUDAS EN LA SIERRA NORTE.</h3>
            </div>
            <div id="textohome1">
                <p>Pincha en el mapa interactivo de arriba si quieres descubrir puntos cercanos a ti.</p>
                <p>Si prefieres, aquí tienes el listado de colaboradores:</p>
            </div>
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Entidades colaboradoras</p>
            </div>
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Refugios de emergencia</p>
            </div>
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Parada de taxis colaboradores</p>
            </div>
            <div className="apartados2">
                <img src={cruz} alt="" />
                <p>Alojamiento protegido</p>
            </div>
            <div className="apartados2 ultimo">
                <img src={cruz} alt=""/>
                <p>Intervención especializada presencial</p>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>
        </div>
    )
}
export default RecursosSN
