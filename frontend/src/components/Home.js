import React, { useEffect, useState } from "react";
import "./styles/Home.css"

const Home = (props) => {

    return (
        <div id="home">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192831.31408033273!2d-3.717341323241185!3d40.95981362486439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43e119fd216bb7%3A0x7daed32de71906a!2sSierra%20Norte%2C%20Madrid!5e0!3m2!1ses!2ses!4v1673447277598!5m2!1ses!2ses" width="100%" height="200" loading="lazy"></iframe>
            <div id="noestassola">
                <h3>En la Sierra Norte no estás sola</h3>
            </div>
            <div id="textohome1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque consectetur tincidunt. Nam nec quam porttitor, iaculis felis vel, finibus augue. Donec sagittis venenatis tincidunt. Nulla varius urna ac ultrices molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie porta auctor. </p>
            </div>

            <div className="apartados">
                <h4><strong>Víctimas</strong></h4>
            </div>

            <div className="apartados">

                <h4><strong>Familiares/Amigos</strong></h4>
            </div>

            <div className="apartados">
                <h4><strong>No sabe que es víctima</strong></h4>
            </div>

            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button>
        </div>
    );
};

export default Home;