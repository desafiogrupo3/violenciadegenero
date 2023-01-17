import React from 'react'
import { useEffect, useState } from 'react';
import ChatBot from "react-simple-chatbot";

const Chat = () => {
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");
    const [mensajes, setMensajes] = useState([])

    function enviar() {
        console.log(msg)
        setMensajes([{ msg: msg, from: "user" }])
        console.log(mensajes)
        setTimeout(respuesta, 2000, 0);
        console.log(mensajes)
    }

    function respuesta(res) {
        switch (res) {
            case 0:
                console.log(mensajes)
                setMensajes(mensajes.concat({ msg: "Vaya, parece que conoces a alguien que lo está pasando mal. ¿Es así?", from: "sara" }))
                break;
            case 1:
                setMensajes([...mensajes, { msg: "Por lo que entiendo, creo que te vendría bien un poco de ayuda externa. ¿Quieres ver que recursos tienes a tu disposición?", from: "sara" }])
                break;
            case 2:
                setMensajes([...mensajes, { msg: "Es una situación complicada, a veces difícil reconocer lo que tenemos delante. ¿Me dejarías hacerte más preguntas para conocer mejor tu situación?", from: "sara" }])
                break;
            default:
                break;
        }
    }

    return (
        <div className='chat'>
            <div className="msgsContainer">
                <div className="sara">Hola, soy SARA. ¿En qué puedo ayudarte? Por favor, introduce brevemente qué te preocupa y veré que puedo hacer. Todavía estoy en desarrollo, por lo que te agradecería que me lo comentases en una única oración. </div>
                {/* {msg2 ? <div className="user">{msg2}</div> : null} */}
                {mensajes.map((mensaje, i) => {
                    return <div key={i} className={mensaje.from}>{mensaje.msg}</div>
                    {/* <div key={i} className={mensaje.from}> ehhhh {mensaje.msg}</div> */ }
                })}
                <ChatBot steps = {[
                    {
                        id: "intro",
                        message: "Hola, soy SARA.",
                        end: true
                    }
                ]}/>
            </div>
            <input type="text" placeholder='Escribe aquí...' onChange={(e) => { setMsg(e.target.value) }} value={msg} />
            <button onClick={enviar}>Enviar</button>
        </div>
    )
}

export default Chat
