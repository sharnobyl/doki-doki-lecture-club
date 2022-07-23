import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'

export default function Sidebar() {
    // connect to backend
    const name = 'name'

    const [clicked, setClicked] = useState(false);
    const [course1Clicked, setCourse1Clicked] = useState(false)
    const [course2Clicked, setCourse2Clicked] = useState(false)
    const [course3Clicked, setCourse3Clicked] = useState(false)
    const [course4Clicked, setCourse4Clicked] = useState(false)

    const addOpenMenuClass = () => {
        setClicked(!clicked);
        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
        setCourse1Clicked(false)
        setCourse2Clicked(false)
        setCourse3Clicked(false)
        setCourse4Clicked(false)
    }

    const addCourseName1 = () => {
        if (!course1Clicked && clicked) {
            ReactDOM.render(`1. ${name}`, document.getElementById("btn1"));
        } else {
            ReactDOM.render(`1`, document.getElementById("btn1"));
        }
        setCourse1Clicked(!course1Clicked)

        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
        setCourse2Clicked(false)
        setCourse3Clicked(false)
        setCourse4Clicked(false)
    }

    const addCourseName2 = () => {
        if (!course2Clicked && clicked) {
            ReactDOM.render(`2. ${name}`, document.getElementById("btn2"));
        } else {
            ReactDOM.render(`2`, document.getElementById("btn2"));
        }
        setCourse2Clicked(!course2Clicked)

        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
        setCourse1Clicked(false)
        setCourse3Clicked(false)
        setCourse4Clicked(false)

    }

    const addCourseName3 = () => {
        if (!course3Clicked && clicked) {
            ReactDOM.render(`3. ${name}`, document.getElementById("btn3"));
        } else {
            ReactDOM.render(`3`, document.getElementById("btn3"));
        }
        setCourse3Clicked(!course3Clicked)

        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`4`, document.getElementById("btn4"));
        setCourse1Clicked(false)
        setCourse2Clicked(false)
        setCourse4Clicked(false)
    }

    const addCourseName4 = () => {
        if (!course4Clicked && clicked) {
            ReactDOM.render(`4. ${name}`, document.getElementById("btn4"));
        } else {
            ReactDOM.render(`4`, document.getElementById("btn4"));
        }
        setCourse4Clicked(!course4Clicked)

        ReactDOM.render(`1`, document.getElementById("btn1"));
        ReactDOM.render(`2`, document.getElementById("btn2"));
        ReactDOM.render(`3`, document.getElementById("btn3"));
        setCourse1Clicked(false)
        setCourse2Clicked(false)
        setCourse3Clicked(false)

    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"}>
            <div className={clicked ? "menuBtn menuBtnOpen" : "menuBtn"} onClick={addOpenMenuClass}></div>
            <div className='classCont' onClick={addCourseName1}>
                <div id="btn1" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>1</div>
            </div>
            <div className='classCont' onClick={addCourseName2}>
                <div id="btn2" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>2</div>
            </div>
            <div className='classCont' onClick={addCourseName3}>
                <div id="btn3" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>3</div>
            </div>
            <div className='classCont' onClick={addCourseName4}>
                <div id="btn4" className={clicked ? "classBtn classBtnOpen" : "classBtn"}>4</div>
            </div>
        </div >

    )
}
