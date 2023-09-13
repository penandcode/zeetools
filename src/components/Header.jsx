import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ name, search }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <h2
          onClick={() => {
            navigate("/", { from: "*" });
          }}
        >
          {name}
        </h2>

        {search && (
          <input
            className="searchInput"
            onChange={(e) => search(e.target.value)}
            type="text"
            placeholder="🔍"
          />
        )}
      </div>
    </>
  );
};

export default Header;
