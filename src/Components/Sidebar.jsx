import "../css/sidebar.css";
import home from "../assets/sidebar/home.svg";
import explore from "../assets/sidebar/explore.svg";
import shorts from "../assets/sidebar/shorts.png";
import history from "../assets/sidebar/history.png";
import SideBarNavItem from "./SideBarNavItem";
import { useEffect, useState } from "react";
import "../data.js";
import { sideBarItems } from "../data.js";

const Sidebar = ({ isSideBarExpanded }) => {
  const [selectedId, setSelectedId] = useState(1);

  // useEffect(() => {
  //   setSelectedId(1);
  // }, []);

  const clickNavItem = (id) => {
    setSelectedId(id);
  };
  return (
    <div className="sidebar">
      {sideBarItems.map((item) => {
        return (
          <SideBarNavItem
            isSideBarExpanded={isSideBarExpanded}
            id={item.id}
            key={item.id}
            itemName={item.itemName}
            img={item.img}
            clickNavItem={clickNavItem}
            isNavItemSelected={selectedId === item.id}
          />
        );
      })}
    </div>

    // <SideBarNavItem
    //   isSideBarExpanded={isSideBarExpanded}
    //   itemName={"Home"}
    //   img={home}
    //   isSelected={isSelected}
    // />
    // {/*
    // <div className="responsive-sidebar">
    //   <img className="sidebar-logo" src={home} alt="" />
    //   <span className="sidebar-title">
    //     {isSideBarExpanded ? "Expanded" : "Home"}
    //   </span>
    // </div> */}

    // <SideBarNavItem
    //   isSideBarExpanded={isSideBarExpanded}
    //   itemName={"Shorts"}
    //   img={shorts}
    //   isSelected={isSelected}
    // />

    // <SideBarNavItem
    //   isSideBarExpanded={isSideBarExpanded}
    //   itemName={"History"}
    //   img={history}
    //   isSelected={isSelected}
    // />

    // <SideBarNavItem
    //   isSideBarExpanded={isSideBarExpanded}
    //   itemName={"Explore"}
    //   img={explore}
    // />
  );
};

export default Sidebar;
