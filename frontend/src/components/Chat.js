import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Chat = ({handleClose}) => {
    const [msg, setMsg] = useState("");
    const [isMsgSent, setIsMsgSent] = useState(false)
    const [mensajes, setMensajes] = useState([])
    const [preguntas, setPreguntas] = useState([])
    const [contador, setContador] = useState(0)
    const [contadorCat, setContadorCat] = useState(0)
    const categoria= ['fisica', 'sexual', 'psicologica', 'economica', 'redesSociales']
    const [isTest, setIsTest] = useState(false)
    const [caso, setCaso] = useState()

    const preguntasTest = {
        fisica: [
            '¿Alguna vez te ha empujado o pegado tu pareja?',
            '¿Alguna vez has tenido que ocultar moratones o heridas que te haya hecho tu pareja?',
            '¿Alguna vez has tenido que acudir al médico como consecuencia de una disputa con tu pareja?'
        ],
        sexual: [
            '¿Alguna vez te has sentido presionada para mantener relaciones sexuales con tu pareja?',
            '¿Sientes que al mantener relaciones eres tú quien tiene que complacerle a él?',
            '¿Tu pareja te impide usar métodos anticonceptivos, o condiciona su uso?'
        ],
        psicologica: [
            '¿Sientes que tu pareja se interpone entre tus amigos o familiares y tú?',
            '¿Alguna vez te ha dicho cómo deberías vestirte o te has vestido diferente por miedo a como reaccionaría?',
            '¿Tienes miedo a mostrar tu opinión en público por si no le gusta lo que dices?'
        ],
        economica: [
            '¿Tu pareja te impide trabajar?',
            '¿Sientes que tu pareja controla de alguna forma tu dinero?',
            '¿Tu pareja te insiste o te obliga a tener acceso a tu cuenta bancaria?'
        ],
        redesSociales: [
            '¿Tu pareja mira tu móvil sin tu permiso',
            '¿Crees que cuestiona las fotos que subes a redes sociales? Si no tienes redes sociales, marca que no.',
            '¿Tu pareja ha difundido fotos o comentarios sobre ti?'
        ]
    }

    function enviar() {
        setMensajes(mensajes.concat({ msg: msg, from: "user" }))
        setIsMsgSent(true)
        setMsg('')
    }

    useEffect(() => {
        isMsgSent && respuesta(0)
        setIsMsgSent(false)
    }, [isMsgSent])

    useEffect(() => {
        document.getElementsByClassName("offcanvas-body")[0].scrollTo(0, 100000000000000)
    }, [mensajes])

    function respondeSi() {
        setMensajes(mensajes.concat([{ msg: "Si", from: "user" }, { msg: preguntas[1], from: "sara" , enlace: true}]))
        document.getElementsByClassName("siOno")[document.getElementsByClassName("siOno").length - 1].style.display = 'none'
    }
    function respondeNo() {
        setMensajes(mensajes.concat([{ msg: "No", from: "user" }, { msg: "¿Hay alguna otra cosa en la que te pueda ayudar? ", from: "sara" }]))
        document.getElementsByClassName("siOno")[document.getElementsByClassName("siOno").length - 1].style.display = 'none'
    }
    function respondeTest(res) {
        if (contador < 2) {
            setContador(contador + 1)
        } else {
            setContador(0)
            setContadorCat(contadorCat+1)
        }
        if(contadorCat === 5) {
            setContadorCat(0)
            setContador(0)
        }
        setMensajes(mensajes.concat([{ msg: res, from: "user" }, { msg: preguntasTest[`${categoria[contadorCat]}`][contador], from: "sara", options: true }]))
        document.getElementsByClassName("siOno")[document.getElementsByClassName("siOno").length - 1].style.display = 'none'
    }

    function pintaSiOno() {
        if (!isTest) {
            return (
                <div className="siOno">
                    <button onClick={respondeSi}>SI</button>
                    <button onClick={respondeNo}>N0</button>
                </div>
            )
        } else {
            return (
                <div className="siOno">
                    <button onClick={() => respondeTest("si")}>Si</button>
                    <button onClick={() => respondeTest("no")}>N0</button>
                </div>
            )
        }
    }

    function respuesta(res) {
        setCaso(res)
        switch (res) {
            case 0:
                setPreguntas(["Vaya, parece que conoces a alguien que lo está pasando mal. ¿Es así?", "Me alegro de poder ayudarte. Si haces click en el siguiente enlace podrás obtener información sobre cómo puedes ayudar desde tu posición. "])
                setMensajes(mensajes.concat({ msg: "Vaya, parece que conoces a alguien que lo está pasando mal. ¿Es así?", from: "sara", options: true }))
                break;
            case 1:
                setPreguntas(["Por lo que entiendo, creo que te vendría bien un poco de ayuda externa. ¿Quieres ver que recursos tienes a tu disposición?", "Genial. Se que es difícil enfrentarse a este tipo de situaciones, pero no estás sola. Si haces click en el siguiente enlace podrás conocer los diferentes recursos y asociaciones que existen a tu alrededor"])
                setMensajes([...mensajes, { msg: "Por lo que entiendo, creo que te vendría bien un poco de ayuda externa. ¿Quieres ver que recursos tienes a tu disposición?", from: "sara", options: true }])
                break;
            case 2:
                setIsTest(true)
                setPreguntas(["Es una situación complicada, a veces difícil reconocer lo que tenemos delante. ¿Me dejarías hacerte más preguntas para conocer mejor tu situación?", "¿Alguna vez te ha empujado o pegado tu pareja?.", "¿Alguna vez has tenido que ocultar moratones o heridas que te haya hecho tu pareja?",
                    "¿Alguna vez has tenido que acudir al médico como consecuencia de una disputa con tu pareja?"])
                setMensajes([...mensajes, { msg: "Es una situación complicada, a veces difícil reconocer lo que tenemos delante. ¿Me dejarías hacerte más preguntas para conocer mejor tu situación?", from: "sara", options: true }])
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
                        return <div key={i} className={mensaje.from}>
                            {mensaje.msg} 
                        </div>
                    } else {
                        return (<div key={i}>
                            <div className={mensaje.from}>
                                {mensaje.msg}
                                {mensaje.enlace ? 
                                    <div>
                                        {caso === 0 ? <NavLink onClick={handleClose} to="/necesitantuvoz">Pincha aquí</NavLink> : null}
                                        {caso === 1 ? <NavLink onClick={handleClose} to="/recursossierranorte">Pincha aquí</NavLink> : null}
                                    </div>
                                : null}
                            </div>
                            {mensaje.options ? pintaSiOno() : null}
                            
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