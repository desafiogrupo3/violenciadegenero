import React, { useEffect, useState } from "react";

const Home = (props) => {
    const [firstTime, setFirstTime] = useState(false);

    async function getCoordinates() {
        setFirstTime(false)
        navigator.geolocation.getCurrentPosition(async (position) => {
            let datos = {
                method: "post",
                body: JSON.stringify({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }),
                mode: "cors",
                headers: { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" },
            };
            fetch("http://localhost:3001/addLocation", datos)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                });
        });
    }

    useEffect(() => {
        setFirstTime(true);
    }, []);

    useEffect(() => {
        if (firstTime) getCoordinates();
    }, [firstTime]);

    return (
        <div id="home">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192831.31408033273!2d-3.717341323241185!3d40.95981362486439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43e119fd216bb7%3A0x7daed32de71906a!2sSierra%20Norte%2C%20Madrid!5e0!3m2!1ses!2ses!4v1673447277598!5m2!1ses!2ses" width="100%" height="200" loading="lazy"></iframe>
            <div id="noestassola">
                <h3>EN LA SIERRA NORTE NO ESTÁS SOLA</h3>
            </div>
            <div id="textohome1">
                <p>Programa asistencial para mujeres víctimas de violencia de género en la Sierra Norte de Madrid.</p>
            </div>

            <div className="apartados">
                <div>
                    <h4>Derechos y recursos disponibles para las víctimas.</h4>
                    <p>En este apartado encontrarás todos los recursos a tu disposición de forma totalmente confidencial.</p>
                </div>

                <button className="vermas">VER MÁS</button>
            </div>

            <div className="apartados">
                <div>
                    <h4>Ellas necesitan tu voz.</h4>
                    <p>Si conoces alguna mujer que pueda estar siendo víctima de violencia de género tu ayuda puede salvarla.</p>
                </div>

                <button className="vermas">CÓMO ACTUAR</button>
            </div>

            <div className="apartados">
                <div>
                    <h4>¿Cómo detectar si eres víctima de violencia de género?</h4>
                    <p>Señales que pueden dar respuesta a esta pregunta.</p>
                </div>

                <button className="vermas">QUIERO SABER MÁS</button>
            </div>

            <div className="apartados ultimo">
                <div>
                    <h4>Necesitamos tu ayuda como voluntario/a de Cruz Roja</h4>
                    <p>Puedes ayudarnos de muchas maneras diferentes.</p>
                </div>

                <button className="vermas">COMO COLABORAR</button>
            </div>

            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>

            {/* <button id="accesibilidad"> <strong>Accesibilidad.</strong>  </button> */}
        </div>
    );
};

export default Home;