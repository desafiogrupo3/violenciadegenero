import React from 'react';
import { NavLink } from 'react-router-dom';
import foto from '../img/foto4.png'


const Detectar = () => {

    return (
        <div className='dyr'>
            <img id="fotoencabezado" src={foto} alt="" width={"100%"}/>
            <div id="noestassola">
                <h3>¿Cómo detectar si eres víctima de violencia de género?</h3>
            </div>
            <div id="textohome1">
                <p>Existen diferentes tipos de maltrato y cada uno de ellos tiene sus propias señales.</p>
            </div>
            <div className="apartados">
                <div>
                    <h4>Violecia física</h4>
                    <p>Causa daños físicos o lesiones, incluye golpes, empujones, quemaduras,...</p>
                </div>
                <NavLink to='/derechos'><button className="vermas">VER SEÑALES</button></NavLink>

            </div>
            <div className="apartados">
                <div>
                    <h4>Violecia sexual</h4>
                    <p>Cualquier acto sexual no deseado o consensuado.</p>
                </div>
                <NavLink to='/recursossierranorte'><button className="vermas">VER SEÑALES</button></NavLink>
            </div>

            <div className="apartados">
                <div>
                    <h4>Violecia psicológica</h4>
                    <p>Comportamientos que afectan a la salud mental y emocional de una persona.</p>
                </div>
                <NavLink to='/recursossierranorte'><button className="vermas">VER SEÑALES</button></NavLink>
            </div>
            <div className="apartados">
                <div>
                    <h4>Violecia económica</h4>
                    <p>Control económico y restricción a recursos económicos para dañar a otra persona.</p>
                </div>
                <NavLink to='/derechos'><button className="vermas">VER SEÑALES</button></NavLink>
            </div>
            <div className="apartados">
                <div>
                    <h4>Violencia obstétrica</h4>
                    <p>Violencia contra la salud sexual o reproductiva. </p>
                </div>
                <NavLink to='/derechos'><button className="vermas">VER SEÑALES</button></NavLink>
            </div>
            <div className="apartados ultimo">
                <div>
                    <h4>Violencia en las redes sociales</h4>
                    <p>Uso de las redes sociales y tecnologías de la información para perpetrar actos de violencia.</p>
                </div>
                <NavLink to='/conocetusderechos'><button className="vermas">VER SEÑALES</button></NavLink>
            </div>

            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>
        </div>
    )
}
export default Detectar
