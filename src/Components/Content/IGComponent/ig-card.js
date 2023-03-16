import React from "react";

import upArrow from '../../../Assets-main/icon-up.svg';
import igIcon from './Assets-IG/icon-instagram.svg';
export default function IG_Card() {
    return (
        <>
        
        <div id="ig-bg" className="social-bg">
        <div className="card-top">
            <img src={igIcon} alt="" /><p>@nathanf</p>
        </div>
        <div className='social-body'>
            <h1>6969</h1>
            <p>Followers</p>
        </div>
        <div className='social-foot'>
            <h6><img src={upArrow} alt="" /> 12 today</h6>
        </div>
        </div>
        
        </>
    );
}