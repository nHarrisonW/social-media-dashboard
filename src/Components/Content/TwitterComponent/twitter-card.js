import React from "react";

import upArrow from '../../../Assets-main/icon-up.svg';
import twitterIcon from './Assets-twitter/icon-twitter.svg';

export default function TwitterCard() {
    return (
        <>
        <div id="twitter-bg" className="social-bg">
        <div className="card-top">
            <img src={twitterIcon} alt="" /><p>@nathanf</p>
        </div>
        <div className='social-body'>
            <h1>6969</h1>
            <p>Followers</p>
        </div>
        <div className='social-foot'>
            <h6><img src={upArrow} alt="" /> 99 today</h6>
        </div>
        </div>
        </>
    );
}