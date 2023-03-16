import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';


import DashboardTitle from "./Components/Content/dashboard";
import FacebookCard from "./Components/Content/FacebookComponent/facebook-card";
import TwitterCard from "./Components/Content/TwitterComponent/twitter-card";
import IG_Card from "./Components/Content/IGComponent/ig-card";
import YT_Card from "./Components/Content/YTComponent/yt-card";
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='Father'>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className='Mother'>
          <div className='Gaurdian'>
            {/* components */}
            < DashboardTitle />
            {/* Dark mode/ light mode button! */}
            <button id='lightsBtn' onClick={toggleMode}>Toggle Mode</button>
          </div>
            <div className='Top-row'>
              < FacebookCard />
              < TwitterCard />
              < IG_Card />
              < YT_Card />
            </div>
            <div className="Top-row">
            < FacebookCard />
            < FacebookCard />



            </div>
            <div className="Top-row">
            < FacebookCard />
              

            </div>
        </div>
      </div>
    </div>
  );
}
