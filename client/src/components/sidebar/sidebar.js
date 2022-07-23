import React, { useState } from 'react'
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
    }

    const addCourseName1 = () => {
        setCourse1Clicked(!course1Clicked)
        if (course1Clicked) {

        } else {

        }
    }

    const addCourseName2 = () => {
        setCourse2Clicked(!course2Clicked)
    }

    const addCourseName3 = () => {
        setCourse3Clicked(!course3Clicked)
    }

    const addCourseName4 = () => {
        setCourse4Clicked(!course4Clicked)
    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"}>
            <div className={clicked ? "menuBtn menuBtnOpen" : "menuBtn"} onClick={addOpenMenuClass}></div>
            <div className='classCont' onClick={addCourseName1}>
                <div className={clicked ? "classBtn classBtnOpen" : "classBtn"}>1</div>
            </div>
            <div className='classCont' onClick={addCourseName2}>
                <div className={clicked ? "classBtn classBtnOpen" : "classBtn"}>2</div>
            </div>
            <div className='classCont' onClick={addCourseName3}>
                <div className={clicked ? "classBtn classBtnOpen" : "classBtn"}>3</div>
            </div>
            <div className='classCont' onClick={addCourseName4}>
                <div className={clicked ? "classBtn classBtnOpen" : "classBtn"}>4</div>
            </div>
        </div >

    )
}
