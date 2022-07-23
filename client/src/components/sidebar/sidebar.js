import React, { useState } from 'react'
import './sidebar.css'

export default function Sidebar() {

    const [clicked, setClicked] = useState(false);

    const addOpenMenuClass = () => {
        setClicked(true);
    }

    return (
        <div className={clicked ? "sidebar menuOpen" : "sidebar"}>
            <div className="menuBtn" onClick={addOpenMenuClass}></div>
        </div >

    )
}
