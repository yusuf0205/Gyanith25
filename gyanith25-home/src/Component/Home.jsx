import React from "react";
import "./Home.css";
import windows from './Asset/windows.png';
import whatsapp from './Asset/whatsapp.png';
import internetexplorer from './Asset/internet-explorer.png';
import photo from './Asset/photo.png';
import files from './Asset/files.png';

const HandleClick = () => {
  <a href="./Other-folders/whatsapp.jsx"></a>
}
const Home = () => {
  return (
    <div className="flex-box">
      <div className="container"></div>
      <div className="navbar">
        <div className="icons">
          <img src={windows} alt="" />
          <img src={whatsapp} alt="" onClick={HandleClick} />
          <img src={internetexplorer} alt="" />
          <img src={photo} alt="" />
          <img src={files} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
