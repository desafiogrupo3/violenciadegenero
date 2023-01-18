import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { getCoordinates } from "../helpers/getCoordinates";
import Map from "./Map";
import foto from '../img/foto1.png'
import logo_sara from '../img/logo_sara.png'
import { AiFillPhone } from 'react-icons/ai'

const Home = (props) => {
    const [firstTime, setFirstTime] = useState(false);

    useEffect(() => {
        setFirstTime(true);
    }, []);

    useEffect(() => {
        if (firstTime) getCoordinates(setFirstTime);
    }, [firstTime]);

    return (
        <div id="home">
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
            <div>
                <img id="logosara2" src={logo_sara} alt="" />
            </div>
            <div id="restocontainer">

                <div id="noestassola">
                    <h3>EN LA SIERRA NORTE NO ESTÁS SOLA</h3>
                </div>
                <div id="textohome1">
                    <p>Programa asistencial para mujeres víctimas de violencia de género en la Sierra Norte de Madrid.</p>
                </div>
                <div id="apartadoscontainer">

                    <div className="apartados">
                        <div>
                            <h4>Derechos y recursos disponibles para las víctimas.</h4>
                            <p>En este apartado encontrarás todos los recursos a tu disposición de forma totalmente confidencial.</p>
                        </div>
                        <NavLink to='/derechos'><button className="vermas">VER MÁS</button></NavLink>

                    </div>

                    <div className="apartados">
                        <div>
                            <h4>Ellas necesitan tu voz.</h4>
                            <p>Si conoces alguna mujer que pueda estar siendo víctima de violencia de género tu ayuda puede salvarla.</p>
                        </div>

                        <NavLink to='/necesitantuvoz'><button className="vermas">CÓMO ACTUAR</button></NavLink>
                    </div>

                    <div className="apartados">
                        <div>
                            <h4>¿Cómo detectar si eres víctima de violencia de género?</h4>
                            <p>Señales que pueden dar respuesta a esta pregunta.</p>
                        </div>
                        <NavLink to='/detectarsieresvictima'><button className="vermas">QUIERO SABER MÁS</button></NavLink>
                    </div>

                    <div className="apartados ultimo">
                        <div>
                            <h4>Necesitamos tu ayuda como voluntario/a de Cruz Roja</h4>
                            <p>Puedes ayudarnos de muchas maneras diferentes.</p>
                        </div>
                        <NavLink to='/voluntarios'><button className="vermas">COMO COLABORAR</button></NavLink>
                    </div>
                </div>
            </div>




            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default Home;