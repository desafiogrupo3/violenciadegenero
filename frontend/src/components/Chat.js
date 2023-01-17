import React from 'react'
import { useEffect, useState } from 'react';

const Chat = () => {
    const [msg, setMsg] = useState("");
    const [isMsgSent, setIsMsgSent] = useState(false)
    const [mensajes, setMensajes] = useState([])
    const [preguntas, setPreguntas] = useState([])

    function enviar() {
        setMensajes(mensajes.concat({ msg: msg, from: "user" }))
        setIsMsgSent(true)
        setMsg('')
    }

    useEffect(() => {
        isMsgSent && respuesta(2)
        setIsMsgSent(false)
    }, [isMsgSent])

    useEffect(() => {
        document.getElementsByClassName("offcanvas-body")[0].scrollTo(0, 100000000000000)
    }, [mensajes])

    function respondeSi() {
        setMensajes(mensajes.concat([{ msg: "Si", from: "user" }, { msg: preguntas[1], from: "sara" }]))
        document.getElementsByClassName("siOno")[document.getElementsByClassName("siOno").length - 1].style.display = 'none'
    }
    function respondeNo() {
        setMensajes(mensajes.concat([{ msg: "No", from: "user" }, { msg: "¿Hay alguna otra cosa en la que te pueda ayudar? ", from: "sara" }]))
        document.getElementsByClassName("siOno")[document.getElementsByClassName("siOno").length - 1].style.display = 'none'
    }

    function pinstaSiOno() {
        return (
            <div className="siOno">
                <button onClick={respondeSi}>SI</button>
                <button onClick={respondeNo}>N0</button>
            </div>
        )
    }
    function respuesta(res) {
        switch (res) {
            case 0:
                setPreguntas(["Vaya, parece que conoces a alguien que lo está pasando mal. ¿Es así?", "Me alegro de poder ayudarte. Si haces click en este enlace podrás obtener información sobre cómo puedes ayudar desde tu posición. "])
                setMensajes(mensajes.concat({ msg: "Vaya, parece que conoces a alguien que lo está pasando mal. ¿Es así?", from: "sara", options: true }))
                break;
            case 1:
                setPreguntas(["Por lo que entiendo, creo que te vendría bien un poco de ayuda externa. ¿Quieres ver que recursos tienes a tu disposición?", "Genial. Se que es difícil enfrentarse a este tipo de situaciones, pero no estás sola. Si haces click en el siguiente enlace podrás conocer los diferentes recursos y asociaciones que existen a tu alrededor"])
                setMensajes([...mensajes, { msg: "Por lo que entiendo, creo que te vendría bien un poco de ayuda externa. ¿Quieres ver que recursos tienes a tu disposición?", from: "sara", options: true }])
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
                {mensajes.map((mensaje, i) => {
                    if (mensaje.from === "user") {
                        return <div key={i} className={mensaje.from}>{mensaje.msg}</div>
                    } else {
                        return (<div key={i}>
                            <div className={mensaje.from}>{mensaje.msg}</div>
                            {mensaje.options ? pinstaSiOno() : null}
                        </div>)
                    }
                })}
            </div>
            <div className='userText'>
                <input
                    type="text"
                    placeholder='Escribe aquí...'
                    onChange={(e) => { setMsg(e.target.value) }}
                    value={msg} />
                <button onClick={enviar}>Enviar</button>
            </div>
        </div>
    )
}

export default Chat