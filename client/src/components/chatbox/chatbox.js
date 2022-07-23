import React, { useState, useEffect } from 'react'
import './chatbox.css'

const ChatBox = () => {
    const messages = [
        { time: 1, message: 'Austria', user: '232' },
        { time: 2, message: 'Germany', user: '24322' },
        { time: 3, message: 'Austria', user: '235322' },
    ]

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