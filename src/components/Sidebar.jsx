import React from "react";

const Sidebar = ({ category }) => {
  return (
    <>
      <div className="sidebar">
        <div className="navbar">
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
        {category.map((item) => {
          // return <div className="sideBarItem">{item.categoryName}</div>;
        })}
      </div>
    </>
  );
};

export default Sidebar;
