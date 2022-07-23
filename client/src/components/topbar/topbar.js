import React from 'react'
import './topbar.css'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='logo'>
                <img src="/images/doki_doki_logo.png" alt="Logo" width="41" height="41"/>
                <img src="/images/doki_long_logo.png" alt="Logo"/>
            </div>
            <div className='chibi'>
                <img src="/images/monica.png"  height="125" onMouseOver={e => (e.currentTarget.src = "/images/monica_hover.gif")} onMouseOut={e => (e.currentTarget.src = "/images/monica.png")}/>
            </div>
        </div>
    )
}
