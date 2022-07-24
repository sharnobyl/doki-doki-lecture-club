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
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [text, setText] = useState('')
    const [currentTime, setCurrentTime] = useState(0)
    const [lectureId, setLectureId] = useState('')

    function toggle() {
        setActive(!active);
    }

    function reset() {
        setTime(0);
        setActive(false);
    }

    useEffect(
        () => {
            axios.get("http://localhost:5000/lecture").then(function (response) {
                setMessages(response.data[props.selectedVideo].comments)
                setLectureId(response.data[props.selectedVideo]._id)
            });

            setDisplay(messages.map(m => displayMessage(m)))
        }, [messages, props.selectedVideo]
    );



    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        } else if (!active && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, time]);

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
            userName: 'Benus Kazi',
            commentMessage: `${text}`,
            timeStampSeconds: `${currentTime}`
        }
        axios.post(`http://localhost:5000/lecture/${lectureId}/comment`, comment)
        setText('')
    }

    const updateTextbox = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='chatbox'>
            {display}
            <form>
                <input className="textInput" onChange={updateTextbox} value={text}></input>
                <div id="submitComment" onClick={submitComment}>Submit</div>
            </form>

        </div>
    )
}

export default ChatBox