import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'
import axios from 'axios';

export default function Sidebar(prop) {

    const [clicked, setClicked] = useState(false);
    const [course1Selected, setCourse1Selected] = useState(true)
    const [course2Selected, setCourse2Selected] = useState(false)
    const [course3Selected, setCourse3Selected] = useState(false)
    const [course4Selected, setCourse4Selected] = useState(false)
    const [lectureData, setLectureData] = useState(null)

    useEffect(
        () => {
            axios.get("http://localhost:5000/lecture").then(function (response) {
                setLectureData(response.data);
            });
        }, []
    );

    const addOpenMenuClass = () => {
        if (clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
        } else {
            ReactDOM.render(`${lectureData[0].lectureTitle}`, document.getElementById("btn1"));
            ReactDOM.render(`${lectureData[1].lectureTitle}`, document.getElementById("btn2"));
            ReactDOM.render(`${lectureData[2].lectureTitle}`, document.getElementById("btn3"));
            ReactDOM.render(`${lectureData[3].lectureTitle}`, document.getElementById("btn4"));
        }
        setClicked(!clicked)
    }

    const addCourseName1 = () => {
        if (!clicked) {
            ReactDOM.render(`${lectureData[0].lectureTitle}`, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
        }

    }

    const addCourseName2 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(`${lectureData[1].lectureTitle}`, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
        }

    }

    const addCourseName3 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(`${lectureData[2].lectureTitle}`, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
        }
    }

    const addCourseName4 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(`${lectureData[3].lectureTitle}`, document.getElementById("btn4"));
        }
    }

    const removeCourseName = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
        }

    }

    const selectCourse1 = () => {
        setCourse1Selected(true)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(false)
        prop.toggleVideo(0)
    }

    const selectCourse2 = () => {
        setCourse1Selected(false)
        setCourse2Selected(true)
        setCourse3Selected(false)
        setCourse4Selected(false)
        prop.toggleVideo(1)
    }

    const selectCourse3 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(true)
        setCourse4Selected(false)
        prop.toggleVideo(2)
    }

    const selectCourse4 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(true)
        prop.toggleVideo(3)
    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"} >
            <div className={clicked ? "menuBtn menuBtnOpen" : "menuBtn"} onClick={addOpenMenuClass}></div>

            <div className={course1Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName1} onMouseLeave={removeCourseName}>
                <div id="btn1" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse1}></div>
            </div>
            <div className={course2Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName2} onMouseLeave={removeCourseName}>
                <div id="btn2" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse2}></div>
            </div>
            <div className={course3Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName3} onMouseLeave={removeCourseName}>
                <div id="btn3" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse3}></div>
            </div>
            <div className={course4Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName4} onMouseLeave={removeCourseName}>
                <div id="btn4" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse4}></div>
            </div>
        </div >

    )
}