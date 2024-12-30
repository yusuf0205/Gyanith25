import React from "react";
import "./Home.css";
import windows from "./Asset/windows.png";
import whatsapp from "./Asset/whatsapp.png";
import internetexplorer from "./Asset/internet-explorer.png";
import photo from "./Asset/photo.png";
import files from "./Asset/files.png";
import search from "./Asset/search.png";
import power from "./Asset/power.png";
import user from "./Asset/user.png";


const HandleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const Home = () => {

  const data = {
    username: "John Doe",
  };
  return (
    <div className="flex-box">
      <div className="container">
        <div className="search-box">
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="content">
          <div className="title-event">
            <div className="title-text">Pinned</div>
          </div>
          <div className="app"></div>
          <div className="sponsor-title">Sponser</div>
          <div className="sponsor"></div>
        </div>
        <div className="bottom">
          <div className="user">
            <img src={user} alt="" />
            {data.username}
          </div>
          <img src={power} alt="" className="power" />
        </div>
      </div>
      <div className="navbar">
        <div className="icons">
          <img src={windows} alt="windows" />
          <img
            src={whatsapp}
            alt="whatsapp"
            onClick={() => HandleClick("./Other-folder/whatsapp.jsx")}
          />
          <img
            src={internetexplorer}
            alt="internet-explorer"
            onClick={() => HandleClick("./Other-folder/internet-explorer.jsx")}
          />
          <img
            src={photo}
            alt=""
            onClick={() => HandleClick("./Other-folder/photo.jsx")}
          />
          <img
            src={files}
            alt="Files"
            onClick={() => HandleClick("./Other-folder/files.jsx")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
