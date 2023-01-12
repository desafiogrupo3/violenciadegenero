import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Chat from '../components/Chat'

export const Rutas = () => {

    return (
        <div>
            <Routes>
                {/* Inicio y registro */}
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
    )
}