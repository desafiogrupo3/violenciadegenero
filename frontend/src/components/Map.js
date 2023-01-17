import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import lugaresdf from "./df_coordenadas.json"
import img from "../img/Cruz Roja.png"
//import Marker from 'react-leaflet-enhanced-marker';
delete L.Icon.Default.prototype._getIconUrl;



L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Map(props) {
    /* const images = props.images */
    const [firstTime, setFirstTime] = useState(true);
    const [lugares, setLugares] = useState(null);

    if (firstTime) {
        let lugares2 = [];
        for (let i = 0; i <= 53; i++) {
            lugares2.push({
                direccion: lugaresdf.Direccion[`${i}`],
                telefono: lugaresdf.Telefono[`${i}`],
                coordenadas: [lugaresdf.point[`${i}`][0], lugaresdf.point[`${i}`][1]]
            })
        }
        setLugares(lugares2)
        setFirstTime(false)
    }/* 

    /* fetch("./df_coordenadas.json")
        .then((res) => console.log(res))
        .then((res) => {
            console.log(res);
            setLugares(res);
            console.log(Object.keys(res));
        });
}, []) */

    const iconAzul = new L.Icon({
        iconUrl: require('../img/chinchetaazul.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [40, 45], // tamaño del icono
        shadowSize: [65, 38], // tamaño de la sombra
        iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
        popupAnchor: [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup
    });

    const iconVerde = new L.Icon({
        iconUrl: require('../img/chinchetaverde.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [40, 45], // tamaño del icono
        shadowSize: [65, 38], // tamaño de la sombra
        iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
        popupAnchor: [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup
    });

    const iconRojo = new L.Icon({
        iconUrl: require('../img/chinchetaroja.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [40, 45], // tamaño del icono
        shadowSize: [65, 38], // tamaño de la sombra
        iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
        popupAnchor: [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup
    });

    function getMarker(lugar, i) {
        let iconselect;
        if (i < 14) iconselect = iconVerde;
        if (i > 13 && i <= 48) iconselect = iconRojo;
        if (i > 48) iconselect = iconAzul;

        return (
            <Marker position={lugar.coordenadas} key={i} icon={iconselect}>
                <Popup>
                    <div>
                        <p>Dirección: {lugar.direccion}</p>
                        <p>Teléfono: <a href={"tel:" + lugar.telefono}>{lugar.telefono}</a></p>
                    </div>
                </Popup>
            </Marker>
        )
    }

    return (
        <div>

            <MapContainer center={[40.94781685287562, -3.648706263450153]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {lugares ? lugares.map((lugar, i) => (getMarker(lugar, i)))

                    : null}
            </MapContainer>
        </div >
    )
}



export default Map