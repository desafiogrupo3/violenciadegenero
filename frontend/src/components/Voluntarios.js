import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import foto from '../img/foto2.png'

const Voluntarios = (props) => {
    return (
        <div>
            <img id="fotoencabezado" src={foto} alt="" width={"100%"}/>
            <div id="noestassola">
                <h3>HAZTE VOLUNTARIO/A DE CRUZ ROJA</h3>
            </div>
            <div id="textohome1">
                <p>Necesitamos tu colaboración en la Sierra Norte y puedes ayudarnos de muchas maneras.</p>
                <p>Rellena el siguiente formulario y recibirás toda la información en tu e-mail.</p>
            </div>
            <div id="form-voluntarios">
                <label> 
                   Nombre
                </label>
                <input type="text" placeholder="Escribe aquí tu nombre"/>

                <label> 
                   E-mail
                </label>
                <input type="text" placeholder="nombre@email.com"/>
                <button>ENVIAR FORMULARIO</button>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default Voluntarios;