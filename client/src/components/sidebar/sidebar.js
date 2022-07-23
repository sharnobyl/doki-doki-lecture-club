import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'

export default function Sidebar() {
    // connect to backend
    const name = 'name'

    const [clicked, setClicked] = useState(false);
    // const [course1Clicked, setCourse1Clicked] = useState(false)
    // const [course2Clicked, setCourse2Clicked] = useState(false)
    // const [course3Clicked, setCourse3Clicked] = useState(false)
    // const [course4Clicked, setCourse4Clicked] = useState(false)

    const addOpenMenuClass = () => {
        setClicked(!clicked);
        // ReactDOM.render(`1`, document.getElementById("btn1"));
        // ReactDOM.render(`2`, document.getElementById("btn2"));
        // ReactDOM.render(`3`, document.getElementById("btn3"));
        // ReactDOM.render(`4`, document.getElementById("btn4"));
    }

    const addCourseName1 = () => {
        ReactDOM.render(`1. ${name}`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
    }

    const addCourseName2 = () => {
        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2. ${name}`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
    }

    const addCourseName3 = () => {
        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3. ${name}`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
    }

    const addCourseName4 = () => {
        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4. ${name}`, document.getElementById("btn4"));
    }

    const removeCourseName = () => {
        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"}>
            <div className={clicked ? "menuBtn menuBtnOpen" : "menuBtn"} onClick={addOpenMenuClass}></div>
            <div className='classCont' onMouseEnter={addCourseName1} onMouseLeave={removeCourseName}>
                <div id="btn1" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>1</div>
            </div>
            <div className='classCont' onMouseEnter={addCourseName2} onMouseLeave={removeCourseName}>
                <div id="btn2" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>2</div>
            </div>
            <div className='classCont' onMouseEnter={addCourseName3} onMouseLeave={removeCourseName}>
                <div id="btn3" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>3</div>
            </div>
            <div className='classCont' onMouseEnter={addCourseName4} onMouseLeave={removeCourseName}>
                <div id="btn4" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>4</div>
            </div>
        </div >

    )
}
