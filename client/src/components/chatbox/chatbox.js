import React, { useState } from 'react'
import './chatbox.css'

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { id: 1, message: 'Austria' },
        { id: 2, message: 'Germany' },
        { id: 3, message: 'Austria' },
    ]
    )

    const printMessage = () => {
        messages.forEach((message) => {
            React.createElement(
                'li',
                {},
                { message }
            )
        })
    }

    return (
        <div className="chatbox">
            <ul>{printMessage()}</ul>
        </div>
    );
}

export default ChatBox