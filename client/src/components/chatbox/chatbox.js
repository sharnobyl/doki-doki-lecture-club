import React, { useState } from 'react'
import './chatbox.css'

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { id: 1, message: 'Austria' },
        { id: 2, message: 'Germany' },
        { id: 3, message: 'Austria' },
    ]
    )
    const [listElements, setListElements] = useState([React.createElement('li',{},'chat start')])

    const createList= () => {
        const list = React.createElement('ul',{},[])
        messages.forEach((message) => {
            const listElement = React.createContext('li',{}, message)
            listElement.textContent = message
            list.appendChild(listElement)
        })
        return list;
    }

    return (
        <div className="chatbox">
            {listElements}
        </div>
    );
}

export default ChatBox