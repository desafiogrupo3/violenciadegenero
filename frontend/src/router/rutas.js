import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import DerechosYrecursos from '../components/DerechosYrecursos'
import RecursosSN from '../components/RecursosSierraNorte'
import NecesitanTuVoz from '../components/NecesitanTuVoz'
import Voluntarios from '../components/Voluntarios'
import ConoceTusDerechos from '../components/ConoceTusDerechos'
import Detectar from '../components/Detectar'
import MuchasGracias from '../components/MuchasGracias'
import ServirDeAyuda from '../components/ServirDeAyuda'

export const Rutas = () => {

    return (
        <div>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/derechos" element={<DerechosYrecursos />} />
                <Route path="/recursossierranorte" element={<RecursosSN />} />
                <Route path="/necesitantuvoz" element={<NecesitanTuVoz />} />
                <Route path="/detectarsieresvictima" element={<Detectar />} />
                <Route path="/conocetusderechos" element={<ConoceTusDerechos />} />
                <Route path="/voluntarios" element={<Voluntarios />} />
                <Route path="/muchasgracias" element={<MuchasGracias />} />
                <Route path="/quieroayudar" element={<ServirDeAyuda />} />
            </Routes>
        </div>
    )
}