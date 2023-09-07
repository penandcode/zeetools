import React, { useEffect, useState } from "react";

const Card = ({ data, categoryChosen }) => {
  const [category, setCategory] = useState("");
  function catToBeChosen(data) {
    categoryChosen(data);
  }
  return (
    <>
      <div className="card">
        <div className="cardTitle">
          <img src={data.image} alt={data.productName} />
          {data.productName}
        </div>
        <div
          className="category"
          onClick={() => {
            catToBeChosen(data.category);
          }}
        >
          {data.category.toUpperCase()}
        </div>
        <div className="cardDesc">{data.description}</div>
        <div className="cardButton">
          <button
            onClick={() =>
              window.open(data.link, "_blank", "noopener,noreferrer")
            }
          >
            Visit
          </button>
          {/* <button>Bookmark</button> */}
        </div>
      </div>
    </>
  );
};

export default Card;
