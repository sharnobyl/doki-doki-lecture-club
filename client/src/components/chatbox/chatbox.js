import React, { useState , useEffect} from 'react'
import './chatbox.css'

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { id: 1, message: 'Austria', user: '232'},
        { id: 2, message: 'Germany', user: '24322' },
        { id: 3, message: 'Austria', user: '235322' },
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