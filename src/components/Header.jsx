import React from "react";
import Pill from "./Pill";

const Header = ({ name, search }) => {
  return (
    <>
      <div className="header">
        <h2 onClick={() => window.location.reload()}>{name}</h2>
        <input
          className="searchInput"
          onChange={(e) => search(e.target.value)}
          type="text"
          placeholder="🔍"
        />
      </div>
    </>
  );
};

export default Header;
