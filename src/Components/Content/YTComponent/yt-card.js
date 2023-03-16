import React from "react";

import downArrow from '../../../Assets-main/icon-down.svg';
import igIcon from './Assets-YT/icon-youtube.svg';
export default function YT_Card() {
    return (
        <>
        
        <div id="yt-bg" className="social-bg">
        <div className="card-top">
            <img src={igIcon} alt="" /><p>@nathanf</p>
        </div>
        <div className='social-body'>
            <h1>6969</h1>
            <p>Followers</p>
        </div>
        <div className='social-foot'>
            <h6><img src={downArrow} alt="" /> 12 today</h6>
        </div>
        </div>
        
        </>
    );
}