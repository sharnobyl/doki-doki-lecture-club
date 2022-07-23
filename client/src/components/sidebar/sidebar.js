import React, { useState } from 'react'
import './sidebar.css'

export default function Sidebar() {

    const [clicked, setClicked] = useState(false);

    const addOpenMenuClass = () => {
        setClicked(!clicked);
    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"}>
            <div className={clicked ? "menuBtn menuBtnOpen" : "menuBtn"} onClick={addOpenMenuClass}></div>
            <div className={clicked ? "classBtn menuBtnOpen" : "classBtn"}></div>
            <div className={clicked ? "classBtn menuBtnOpen" : "classBtn"}></div>
            <div className={clicked ? "classBtn menuBtnOpen" : "classBtn"}></div>
            <div className={clicked ? "classBtn menuBtnOpen" : "classBtn"}></div>
        </div >

    )
}
