import React from "react";

const Header = ({ name, search }) => {
  return (
    <>
      <div className="header">
        <h2 onClick={() => window.location.reload()}>{name}</h2>
        <input
          className="searchInput"
          onChange={(e) => search(e.target.value)}
          type="text"
          placeholder="Search tool"
        />
      </div>
    </>
  );
};

export default Header;
