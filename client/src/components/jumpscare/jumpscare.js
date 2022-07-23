import React, { useState } from 'react'
import './jumpscare.css'

export default function Jumpscare() {

    const [isVisible, setVisible] = useState(false);

    function triggerScare() {

        var time = Math.floor(500*Math.random());

        //document.getElementById('monica').src = "/images/just-monica-scare.png";

        setVisible(true);
        
        setTimeout(function() {
            setVisible(false);
          }, time);


    }

    return (
        <div className='jumpscare'>

            <div className='logo'>
                <input type="image" src="/images/doki_doki_logo.png" alt="Logo" width="41" height="41" onClick={() => triggerScare()} />
            </div>


            <div className={isVisible ? 'visible' : 'hidden' }> 
                <img src="/images/just-monica.png" id='monica' height='100%' width='100%' />
            </div>

        </div>
    )
}
