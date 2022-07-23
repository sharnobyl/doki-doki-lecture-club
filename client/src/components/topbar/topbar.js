import React from 'react'
import './topbar.css'

export default function Topbar() {

    var monicaClick = false;
    var sayoriClick = false
    var natsukiClick = false;
    var yuriClick = false;

    
    //set the booleans to check if a chibi has been clicked
    function imageClick(chibiID) {

        switch(chibiID){
            case 'monica':
                monicaClick = !monicaClick;
                break;
            case 'sayori':
                sayoriClick = !sayoriClick;
                break;
            case 'natsuki':
                natsukiClick = !natsukiClick;
                break;
            case 'yuri':
                yuriClick = !yuriClick;
                break;
            default:
                return;
        }

    }

    //change the chibi image depending on whether its been clicked
    function changeImage(chibiClick, chibiID) {
        var link = "/images/";
        if (chibiClick){
            document.getElementById(chibiID).src = link.concat(chibiID.concat("_hover.gif"));
        } else {
            document.getElementById(chibiID).src = link.concat(chibiID.concat(".png"));
        }
    }

    return (
        <div className='topbar'>
            <div className='logo'>
                <img src="/images/doki_doki_logo.png" alt="Logo" width="41" height="41"/>
                <img src="/images/doki_long_logo.png" alt="Logo"/>
            </div>
            <div className='chibi'>
                <img src="/images/monica.png" id="monica" height="125" onMouseOver={e => (e.currentTarget.src = "/images/monica_hover.gif")} onMouseOut={ e => changeImage(monicaClick, e.currentTarget.id)} onClick={e => imageClick(e.currentTarget.id)} />
                <img src="/images/sayori.png" id="sayori" height="125" onMouseOver={e => (e.currentTarget.src = "/images/sayori_hover.gif")} onMouseOut={ e => changeImage(sayoriClick, e.currentTarget.id)} onClick={e => imageClick(e.currentTarget.id)} />
                <img src="/images/natsuki.png" id="natsuki" height="125" onMouseOver={e => (e.currentTarget.src = "/images/natsuki_hover.gif")} onMouseOut={ e => changeImage(natsukiClick, e.currentTarget.id)} onClick={e => imageClick(e.currentTarget.id)} />
                <img src="/images/yuri.png" id="yuri" height="125" onMouseOver={e => (e.currentTarget.src = "/images/yuri_hover.gif")} onMouseOut={ e => changeImage(yuriClick, e.currentTarget.id)} onClick={e => imageClick(e.currentTarget.id)} />
            </div>
        </div>
    )
}
