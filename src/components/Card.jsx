import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="cardTitle">
          <img src={data.image} alt={data.productName} />
          {data.productName}
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
