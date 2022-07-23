import React, { useState, useEffect } from 'react'
import './chatbox.css'
import axios from 'axios'

const ChatBox = (props) => {
    const [messages, setMessages] = useState([
        {
            messages: [{ timeStampSeconds: 1, commentMessage: 'Austria', userName: '232' },
            { timeStampSeconds: 2, commentMessage: 'Germany', userName: '24322' },
            { timeStampSeconds: 3, commentMessage: 'Austria', userName: '235322' }]
        },
    ]);
    const [display, setDisplay] = useState(null)

    useEffect(
        () => {
            axios.get("http://localhost:5000/lecture").then(function (response) {
                setMessages(response.data[props.selectedVideo].comments)
            });
            setDisplay(messages.map(m => displayMessage(m)))
        }, [messages, props.selectedVideo]
    );

    const displayMessage = (message) => {
        return (
            <p>{message.timeStampSeconds} {message.userName}: {message.commentMessage}</p>
        )
    }

    return (
        <div className='chatbox'>
            {display}
        </div>
    )
}

export default ChatBox