import React, { useState, useEffect } from 'react'
import './chatbox.css'
import axios from 'axios'

const ChatBox = (props) => {
    // const userName = 'benuz kaz'

    const [messages, setMessages] = useState([{ messages: [] }]);
    const [display, setDisplay] = useState(null)
    const [text, setText] = useState('')
    const [userName, setUsername] = useState('')
    const [lectureId, setLectureId] = useState('')

    useEffect(
        () => {
            axios.get("http://localhost:5000/lecture").then(function (response) {
                setMessages(response.data[props.selectedVideo].comments)
                setLectureId(response.data[props.selectedVideo]._id)
            });

            setDisplay(messages.map(m => displayMessage(m)))
        }, [messages, props.selectedVideo]
    );

    const displayMessage = (message) => {
        return (
            <div class='messages'>
                <p id='titlebar'>{message.userName}: </p>
                <p id='commentbar'>{message.commentMessage}</p>
            </div>
        )
    }

    const submitComment = () => {
        const comment = {
            userName: `${userName}`,
            commentMessage: `${text}`,
        }
        if (text.length !== 0 && userName.length !== 0) {
            axios.post(`http://localhost:5000/lecture/${lectureId}/comment`, comment)

        }
        setText('')
    }

    const updateTextbox = (event) => {
        setText(event.target.value)
    }

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div className='chatbox'>
            {display}
            <form>
                <input className="userNameInput" onChange={updateUsername} placeholder="Enter your username" value={userName} onKeyPress={e => {
                    if (e.key === 'Enter') e.preventDefault();
                }}></input>
                <input className="textInput" onChange={updateTextbox} placeholder="Share your thoughts!" value={text} onKeyPress={e => {
                    if (e.key === 'Enter') e.preventDefault();
                }}></input>
                <div id="submitComment" onClick={submitComment}>Submit</div>
            </form>

        </div>
    )
}

export default ChatBox