import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Chat = () => {

    return (
        <div className='chat'>
            <div>
                <div className="msg">¡Hola! Bienvenida al chat de Cruz Roja Sierra Norte.</div>
            </div>
            
            <input type="text" placeholder='Escribe aquí...' />
        </div>
    )
}

export default Chat
