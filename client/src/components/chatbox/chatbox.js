import React, { useState, useEffect } from 'react'
import './chatbox.css'
import axios from 'axios'

const ChatBox = (props) => {
    const [messages, setMessages] = useState([
        {
            messages: [{ time: 1, message: 'Austria', user: '232' },
            { time: 2, message: 'Germany', user: '24322' },
            { time: 3, message: 'Austria', user: '235322' }]
        },
    ]);

    useEffect(
        () => {
            axios.get("http://localhost:5000/lecture").then(function (response) {
                setMessages(response.data[props.selectedVideo].comments)
            });
        }, []
    );

    const displayMessage = (message) => {
        return (
            <p>{message.time} {message.user}: {message.message}</p>
        )
    }

    return (
        <div className='chatbox'>
            {messages.map(m => displayMessage(m))}
        </div>
    )
}

export default ChatBox