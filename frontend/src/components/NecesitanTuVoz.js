import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import foto from '../img/foto2.png';
import logo_sara from '../img/logo_sara.png'
import { AiFillPhone } from 'react-icons/ai'

const NecesitanTuVoz = (props) => {
    return (
        <div id="home" className="nTv">
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
                    <h3>SI CONOCES UN CASO DE VIOLENCIA DE GÉNERO, ACTÚA.</h3>
                </div>
                <div id="textohome1">
                    <p>¿Tienes una familiar o amiga que se encuentra en esta situación? Está en tu mano el poder ayudarla.</p>
                </div>
                <div id="apartadoscontainer">
                    <div className="apartados">
                        <div>
                            <h4>Denuncia</h4>
                            <p>Si has presenciado un episodio de malos tratos tienes derecho a interponer una denuncia.</p>
                        </div>
                        <NavLink to='/necesitantuvoz'><button className="vermas" disabled>CÓMO DENUNCIAR</button></NavLink>

                    </div>

                    <div className="apartados">
                        <div>
                            <h4>Testifica a favor de la víctima</h4>
                            <p>Declara a favor de la víctima cuando sea ésta quien presenta la denuncia.</p>
                        </div>
                        <NavLink to='/necesitantuvoz'><button className="vermas" disabled>CÓMO TESTIFICAR</button></NavLink>
                    </div>

                    <div className="apartados">
                        <div>
                            <h4>Solicita una orden de protección</h4>
                            <p>Solo podrán solicitar la orden de protección judicial los familiares directos de la víctima o convivientes.
                            </p>
                        </div>
                        <NavLink to='/necesitantuvoz'><button className="vermas" disabled>CÓMO SOLICITARLA</button></NavLink>
                    </div>

                    <div className="apartados ultimo">
                        <div>
                            <h4>Sirve de apoyo</h4>
                            <p>Crea una red segura entre familiares y amistades cercanas para mantener el contacto en todo momento.</p>
                        </div>
                        <NavLink to='/quieroayudar'><button className="vermas ok">QUIERO SERVIR DE APOYO</button></NavLink>
                    </div>
                </div></div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO</strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default NecesitanTuVoz;