import React from "react";

const SideBarNavItem = ({
  isSideBarExpanded,
  itemName,
  img,
  id,
  clickNavItem,
  isNavItemSelected,
}) => {
  return (
    <div
      onClick={() => clickNavItem(id)}
      // className={`${isSideBarExpanded ? "responsive-sidebar" : ""}`}

      className={`${
        isSideBarExpanded
          ? isNavItemSelected
            ? "selected-sidebar"
            : "responsive-sidebar"
          : ""
      }`}
    >
      <img className="sidebar-logo" src={img} alt="" />
      <span className="sidebar-title">{itemName}</span>
    </div>
  );
};

export default SideBarNavItem;
