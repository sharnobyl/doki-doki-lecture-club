import React, { useState } from 'react'
import './jumpscare.css'




export default function Jumpscare() {

    const [isVisible, setVisible] = useState(false);

    function triggerScare() {

        var time = Math.floor(500*Math.random());
        var glitch = new Audio('/images/glitch.wav')

        if (Math.random() > 0.8) {
            document.getElementById('monicaScare').src = "/images/just-monica-scare.png";
        } else {
            document.getElementById('monicaScare').src = "/images/just-monica.png";
        }
        

        setVisible(true);
        glitch.play();
        
        setTimeout(function() {
            setVisible(false);
          }, time);
    
    }

    function considerScare() {
        if (Math.random() > 0.8) {
            triggerScare();
        }
    }

    return (
        <div className='jumpscare'>
            <span className='clickArea' onClick={() => considerScare()}>

                <div className='logo'>
                    <input type="image" src="/images/doki_doki_logo.png" alt="Logo" width="41" height="41" onClick={() => triggerScare()} />
                </div>


                <div className={isVisible ? 'visible' : 'hidden' }> 
                    <img src="/images/just-monica.png" id='monicaScare' height='100%' alt='monica jumpscare'/>
                </div>
            </span>

            

        </div>
    )
}

