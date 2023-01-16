import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import foto from '../img/foto5.png'

const MuchasGracias = (props) => {
    return (
        <div>
            <img id="fotoencabezado" src={foto} alt="" width={"100%"} />
            <div id="noestassola">
                <h3>GRACIAS POR TU INTERÉS</h3>
            </div>
            <div id="textohome1">
                <p>Muy pronto recibirás en tu email una breve guía sobre cómo hacerte voluntario/a de Cruz Roja y comenzar a colaborar con nosotros.</p>
            </div>

            <NavLink to='/home' id="gracias-volver">
                <button>VOLVER A INICIO</button>
            </NavLink>

            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default MuchasGracias;