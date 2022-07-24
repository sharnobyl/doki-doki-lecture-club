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
    const [course5Selected, setCourse5Selected] = useState(false)
    const [course6Selected, setCourse6Selected] = useState(false)
    const [course7Selected, setCourse7Selected] = useState(false)
    const [course9Selected, setCourse9Selected] = useState(false)
    const [sub1Selected, setSub1Selected] = useState(true)
    const [sub2Selected, setSub2Selected] = useState(false)
    const [sub3Selected, setSub3Selected] = useState(false)
    const [sub4Selected, setSub4Selected] = useState(false)

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
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
            ReactDOM.render(``, document.getElementById("sub1"));
            ReactDOM.render(``, document.getElementById("sub2"));
            ReactDOM.render(``, document.getElementById("sub3"));
            ReactDOM.render(``, document.getElementById("sub4"));

        } else {
            ReactDOM.render(`${lectureData[0].lectureTitle}`, document.getElementById("btn1"));
            ReactDOM.render(`${lectureData[1].lectureTitle}`, document.getElementById("btn2"));
            ReactDOM.render(`${lectureData[2].lectureTitle}`, document.getElementById("btn3"));
            ReactDOM.render(`${lectureData[3].lectureTitle}`, document.getElementById("btn4"));
            ReactDOM.render(`${lectureData[4].lectureTitle}`, document.getElementById("btn5"));
            ReactDOM.render(`${lectureData[5].lectureTitle}`, document.getElementById("btn6"));
            ReactDOM.render(`${lectureData[6].lectureTitle}`, document.getElementById("btn7"));
            ReactDOM.render(`${lectureData[8].lectureTitle}`, document.getElementById("btn9"));
            ReactDOM.render(`${lectureData[0].subject}`, document.getElementById("sub1"));
            ReactDOM.render(`${lectureData[3].subject}`, document.getElementById("sub2"));
            ReactDOM.render(`${lectureData[5].subject}`, document.getElementById("sub3"));
            ReactDOM.render(`${lectureData[8].subject}`, document.getElementById("sub4"));
        }
        setClicked(!clicked)
    }

    const addCourseName1 = () => {
        if (!clicked) {
            ReactDOM.render(`${lectureData[0].lectureTitle}`, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }

    }

    const addCourseName2 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(`${lectureData[1].lectureTitle}`, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }

    }

    const addCourseName3 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(`${lectureData[2].lectureTitle}`, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }
    }

    const addCourseName4 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(`${lectureData[3].lectureTitle}`, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }
    }
    const addCourseName5 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(`${lectureData[4].lectureTitle}`, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }
    }

    const addCourseName6 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(`${lectureData[5].lectureTitle}`, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }
    }

    const addCourseName7 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(`${lectureData[6].lectureTitle}`, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }
    }

    const addCourseName9 = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(`${lectureData[8].lectureTitle}`, document.getElementById("btn9"));
        }
    }

    const removeCourseName = () => {
        if (!clicked) {
            ReactDOM.render(``, document.getElementById("btn1"));
            ReactDOM.render(``, document.getElementById("btn2"));
            ReactDOM.render(``, document.getElementById("btn3"));
            ReactDOM.render(``, document.getElementById("btn4"));
            ReactDOM.render(``, document.getElementById("btn5"));
            ReactDOM.render(``, document.getElementById("btn6"));
            ReactDOM.render(``, document.getElementById("btn7"));
            ReactDOM.render(``, document.getElementById("btn9"));
        }

    }

    const selectCourse1 = () => {
        setCourse1Selected(true)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(false)
        setCourse5Selected(false)
        setCourse6Selected(false)
        setCourse7Selected(false)
        setCourse9Selected(false)
        setSub1Selected(true)
        setSub2Selected(false)
        setSub3Selected(false)
        setSub4Selected(false)
        prop.toggleVideo(0)
    }

    const selectCourse2 = () => {
        setCourse1Selected(false)
        setCourse2Selected(true)
        setCourse3Selected(false)
        setCourse4Selected(false)
        setCourse5Selected(false)
        setCourse6Selected(false)
        setCourse7Selected(false)
        setCourse9Selected(false)
        setSub1Selected(true)
        setSub2Selected(false)
        setSub3Selected(false)
        setSub4Selected(false)
        prop.toggleVideo(1)
    }

    const selectCourse3 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(true)
        setCourse4Selected(false)
        setCourse5Selected(false)
        setCourse6Selected(false)
        setCourse7Selected(false)
        setCourse9Selected(false)
        setSub1Selected(true)
        setSub2Selected(false)
        setSub3Selected(false)
        setSub4Selected(false)
        prop.toggleVideo(2)
    }

    const selectCourse4 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(true)
        setCourse5Selected(false)
        setCourse6Selected(false)
        setCourse7Selected(false)
        setCourse9Selected(false)
        setSub1Selected(false)
        setSub2Selected(true)
        setSub3Selected(false)
        setSub4Selected(false)
        prop.toggleVideo(3)
    }

    const selectCourse5 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(false)
        setCourse5Selected(true)
        setCourse6Selected(false)
        setCourse7Selected(false)
        setCourse9Selected(false)
        setSub1Selected(false)
        setSub2Selected(true)
        setSub3Selected(false)
        setSub4Selected(false)
        prop.toggleVideo(4)
    }

    const selectCourse6 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(false)
        setCourse5Selected(false)
        setCourse6Selected(true)
        setCourse7Selected(false)
        setCourse9Selected(false)
        setSub1Selected(false)
        setSub2Selected(false)
        setSub3Selected(true)
        setSub4Selected(false)
        prop.toggleVideo(5)
    }

    const selectCourse7 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(false)
        setCourse5Selected(false)
        setCourse6Selected(false)
        setCourse7Selected(true)
        setCourse9Selected(false)
        setSub1Selected(false)
        setSub2Selected(false)
        setSub3Selected(true)
        setSub4Selected(false)
        prop.toggleVideo(6)
    }

    const selectCourse9 = () => {
        setCourse1Selected(false)
        setCourse2Selected(false)
        setCourse3Selected(false)
        setCourse4Selected(false)
        setCourse5Selected(false)
        setCourse6Selected(false)
        setCourse7Selected(false)
        setCourse9Selected(true)
        setSub1Selected(false)
        setSub2Selected(false)
        setSub3Selected(false)
        setSub4Selected(true)
        prop.toggleVideo(8)
    }

    const checkSubject1 = () => {
        if (sub1Selected && clicked) {
            return "subjectBtn subjectBtnOpen subjectSelected"
        } else if (clicked) {
            return "subjectBtn subjectBtnOpen"
        } else {
            return "subjectBtn"
        }
    }

    const checkSubject2 = () => {
        if (sub2Selected && clicked) {
            return "subjectBtn subjectBtnOpen subjectSelected"
        } else if (clicked) {
            return "subjectBtn subjectBtnOpen"
        } else {
            return "subjectBtn"
        }
    }

    const checkSubject3 = () => {
        if (sub3Selected && clicked) {
            return "subjectBtn subjectBtnOpen subjectSelected"
        } else if (clicked) {
            return "subjectBtn subjectBtnOpen"
        } else {
            return "subjectBtn"
        }
    }

    const checkSubject4 = () => {
        if (sub4Selected && clicked) {
            return "subjectBtn subjectBtnOpen subjectSelected"
        } else if (clicked) {
            return "subjectBtn subjectBtnOpen"
        } else {
            return "subjectBtn"
        }
    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"} >
            <div className={clicked ? "menuBtn menuBtnOpen" : "menuBtn"} onClick={addOpenMenuClass}>
                <img id='arrow' src={!clicked ? '/images/arrow.png': '/images/arrowInverted.png'} alt='arrow'/>
            </div>

            <div id="sub1" className={checkSubject1()}></div>

            <div className={course1Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName1} onMouseLeave={removeCourseName}>
                <div id="btn1" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse1}></div>
            </div>
            <div className={course2Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName2} onMouseLeave={removeCourseName}>
                <div id="btn2" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse2}></div>
            </div>
            <div className={course3Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName3} onMouseLeave={removeCourseName}>
                <div id="btn3" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse3}></div>
            </div>

            <div id="sub2" className={checkSubject2()}></div>

            <div className={course4Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName4} onMouseLeave={removeCourseName}>
                <div id="btn4" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse4}></div>
            </div>
            <div className={course5Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName5} onMouseLeave={removeCourseName}>
                <div id="btn5" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse5}></div>
            </div>

            <div id="sub3" className={checkSubject3()}></div>

            <div className={course6Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName6} onMouseLeave={removeCourseName}>
                <div id="btn6" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse6}></div>
            </div>
            <div className={course7Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName7} onMouseLeave={removeCourseName}>
                <div id="btn7" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse7}></div>
            </div>

            <div id="sub4" className={checkSubject4()}></div>

            <div className={course9Selected ? 'classCont selected' : 'classCont'} onMouseEnter={addCourseName9} onMouseLeave={removeCourseName}>
                <div id="btn9" className={clicked ? "classBtn classBtnOpen" : "classBtn"} onClick={selectCourse9}></div>
            </div>

        </div >

    )
} 