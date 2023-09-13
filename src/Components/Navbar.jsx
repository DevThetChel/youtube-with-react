import "../css/navbar.css";
import { useRef } from "react";
import menuLogo from "../assets/navbar/menu-svgrepo-com.svg";
import youtubeLogo from "../assets/navbar/youtube-iconpng.png";
import searchIcon from "../assets/navbar/search.svg";
import voiceSearch from "../assets/navbar/voice-search.svg";
import uploadVideo from "../assets/navbar/upload-video.png";
import notiIcon from "../assets/navbar/notification.png";
import currentUser from "../assets/navbar/current-user-picture.jpg";

const Navbar = ({ toggleSideBar }) => {
  return (
    <>
      {/* navbar-start */}
      <div className="navbar">
        {/* left-side */}
        <div className="navbar-left">
          <button className="menu-container" onClick={toggleSideBar}>
            <img className="menu-logo" src={menuLogo} alt="" />
          </button>
          <a>
            <img className="youtube-logo" src={youtubeLogo} alt="" />
          </a>
        </div>

        {/* middle-side */}

        <div className="navbar-middle">
          <form action="">
            <input className="search-box" type="text" placeholder="Search" />
          </form>
          <button className="search-button">
            <img className="search-icon" src={searchIcon} alt="" />
            <div className="toolkit">Search</div>
          </button>
          <button className="voice-search-button">
            <img className="voice-search-icon" src={voiceSearch} alt="" />
            <div className="toolkit">Search With Voice</div>
          </button>
        </div>

        {/* right-side  */}
        <div className="navbar-right">
          <div className="upload-field">
            <img className="upload-video" src={uploadVideo} alt="" />
            <div className="toolkit">Upload Video</div>
          </div>

          <div className="noti-tag">
            <img className="noti-icon" src={notiIcon} alt="" />
            <span className="noti-number">3</span>
            <div className="toolkit">Notification</div>
          </div>

          <img className="current-user" src={currentUser} alt="" />
        </div>
      </div>
      {/* navbar-end  */}
    </>
  );
};

export default Navbar;
