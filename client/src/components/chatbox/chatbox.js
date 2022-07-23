import React, { useState , useEffect} from 'react'
import './chatbox.css'

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { id: 1, message: 'Austria' },
        { id: 2, message: 'Germany' },
        { id: 3, message: 'Austria' },
    ]
    )
    const [listElements, setListElements] = useState([React.createElement('li',{},'chat start')])

    useEffect(
        () => {
        messages.forEach((message) => {
            setListElements({listElements : [...listElements, React.createElement('li',{}, message)]})
        })
    }
    )

    return (
        <div className="chatbox">
            <ul>{listElements}</ul>
        </div>
    );
}

export default ChatBox