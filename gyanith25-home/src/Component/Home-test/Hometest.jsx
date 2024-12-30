import React, { useState } from "react";
import "./Hometest.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="app-container">
      {/* Taskbar */}
      <div className="taskbar">
        <button className="start-button" onClick={toggleVisibility}>
          <img src="/path-to-windows-icon.png" alt="Start" />
        </button>
      </div>

      {/* Transparent Div */}
      <div
        className={`transparent-div ${isVisible ? "open-animation" : "close-animation"}`}
      >
        <div className="search-bar">
          <input type="text" placeholder="Type Here To Search" />
        </div>
        <div className="content">
          <div className="events">
            <h2>Events</h2>
            <button className="all-events-button">All Events</button>
          </div>
          <div className="sponsors">
            <h2>Sponsors</h2>
            <button className="all-sponsors-button">All Sponsors</button>
          </div>
        </div>
        <div className="footer">
          <span>User name</span>
        </div>
      </div>
    </div>
  );
};

export default App;
