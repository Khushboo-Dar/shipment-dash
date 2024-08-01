import React from "react";
import "./Card.css";
const Card = ({ title, stateObject }) => {
  return (
    <div className="card">
      <div>
        <p className="card-heading">{title}</p>
      </div>
      <div>
        {Object.entries(stateObject).map(([name, number], index) => (
          <div className="card-row" key={index}>
            <p>{name}</p>
            <p>{number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
