import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import foto from '../img/foto5.png';
import logo_sara from '../img/logo_sara.png';

const MuchasGracias = (props) => {
    return (
        <div id="home" className="gracias">
            <div>
                <img id="logosara1" src={logo_sara} alt="" />
            </div>
            <div id="photoencabezadocontainer">
                <img id="fotoencabezado" src={foto} alt="" width={"100%"} />
            </div>
            <div>
                <img id="logosara2" src={logo_sara} alt="" />
            </div>
            <div id="restocontainer">
                <div id="noestassola">
                    <h3>GRACIAS POR TU INTERÉS</h3>
                </div>
                <div id="textohome1">
                    <p>Muy pronto recibirás en tu email una breve guía sobre cómo hacerte voluntario/a de Cruz Roja y comenzar a colaborar con nosotros.</p>
                </div>

                <NavLink to='/home' id="gracias-volver">
                    <button className="ok">VOLVER A INICIO</button>
                </NavLink>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default MuchasGracias;