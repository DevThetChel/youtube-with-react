import "../App.css";
import home from "../assets/sidebar/home.svg";
import explore from "../assets/sidebar/explore.svg";
import shorts from "../assets/sidebar/shorts.png";
import history from "../assets/sidebar/history.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-link">
        <img className="sidebar-logo" src={home} alt="" />
        <div className="sidebar-title">Home</div>
      </div>

      <div className="sidebar-link">
        <img className="sidebar-logo" src={shorts} alt="" />
        <div className="sidebar-title">Shorts</div>
      </div>
      <div className="sidebar-link">
        <img className="sidebar-logo" src={history} alt="" />
        <div className="sidebar-title">History</div>
      </div>
      <div className="sidebar-link">
        <img className="sidebar-logo" src={explore} alt="" />
        <div className="sidebar-title">Explore</div>
      </div>
    </div>
  );
};

export default Sidebar;
