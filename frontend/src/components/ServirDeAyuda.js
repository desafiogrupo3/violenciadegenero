import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import foto from '../img/foto2.png'
import logo_sara from '../img/logo_sara.png'

const ServirDeAyuda = (props) => {

    const [option1, setoption1] = useState('option')
    const [option2, setoption2] = useState('option')
    const [user, setUser] = useState({
        name: '',
        email: '',
        type: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleOption1 = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
        setoption1('selected')
        setoption2('option')
    }
    const handleOption2 = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
        setoption2('selected')
        setoption1('option')
    }

    return (
        <div id="home" className="volun sDa">
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
                    <h3>SIRVE DE APOYO A TU FAMILIAR O AMIGA</h3>
                </div>
                <div id="textohome1">
                    <p>Esa pesona necesita tu colaboración y puedes ayudarla de muchas maneras.
                    </p>
                    <p>Rellena el siguiente formulario y recibirás toda la información en tu e-mail.</p>
                </div>
                <div id="form-voluntarios">
                    <label>
                        Nombre
                    </label>
                    <input
                        type="text"
                        placeholder="Escribe aquí tu nombre"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />

                    <label>
                        E-mail
                    </label>
                    <input
                        type="text"
                        placeholder="nombre@email.com"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />

                    <NavLink to='/muchasgracias'>
                        <button className="ok" onClick={e => console.log(user)}>ENVIAR FORMULARIO</button>
                    </NavLink>
                </div>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default ServirDeAyuda;