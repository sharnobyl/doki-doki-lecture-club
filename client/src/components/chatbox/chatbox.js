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
                <p>{message.timeStampSeconds} {message.userName}: </p>
                <p>{message.commentMessage}</p>
            </div>
        )
    }

    const submitComment = () => {
        setText('')
    }

    const [text, setText] = useState('')

    const updateTextbox = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='chatbox'>
            {display}
            <form>
                <textarea id='text'></textarea>
                <div id="submitComment" onClick={submitComment} textContent={text} onChange={updateTextbox}>Submit</div>
            </form>

        </div>
    )
}

export default ChatBox