import React from 'react'
import './topbar.css'
// import logo from "./doki_doki_logo.png"; 

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='logo'>
                <img src="/images/doki_doki_logo.png" alt="Logo" />
            </div>
        </div>
    )
}
