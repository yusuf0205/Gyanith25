import React, { useState } from "react";
import "./Hometest.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="home-app-container">
      {/* Taskbar */}
      <div className="home-taskbar">
        <button className="home-start-button" onClick={toggleVisibility}>
          <img src="/path-to-windows-icon.png" alt="Start" />
        </button>
      </div>

      {/* Transparent Div */}
      <div
        className={`home-transparent-div ${isVisible ? "home-open-animation" : "home-close-animation"}`}
      >
        <div className="home-search-bar">
          <input type="text" placeholder="Type Here To Search" />
        </div>
        <div className="home-content">
          <div className="home-events">
            <h2>Events</h2>
            <button className="home-all-events-button">All Events</button>
          </div>
          <div className="home-sponsors">
            <h2>Sponsors</h2>
            <button className="home-all-sponsors-button">All Sponsors</button>
          </div>
        </div>
        <div className="home-footer">
          <span>User name</span>
        </div>
      </div>
    </div>
  );
};

export default App;
