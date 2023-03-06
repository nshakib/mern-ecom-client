import '../styles/App.css';
import React from "react";

function Card({infoId, firstName, lastName}) {
  return (
    <div>
      <h1>Card</h1>
      <h3>{infoId}</h3>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
    </div>
  );
}

export default Card;
