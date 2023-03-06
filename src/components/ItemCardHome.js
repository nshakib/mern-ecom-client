import "../styles/App.css";
import React from "react";
import { Link } from "react-router-dom";

function ItemCardHome(props) {
  const { product } = props;
  return (
    <Link to={`/product/${product._id}`} className="item-card">
      <div style={{backgroundImage: "url(" + product.image + ")"}} className="item-card-header"></div>
      <div className="item-card-body">
        <div className="card-title">{product.name}</div>
        <div className="card-text">{product.description}</div>
        <div className="card-footer">
          <div className="card-price">{product.price}</div>
          <button className="card-button">Buy</button>
        </div>
      </div>
    </Link>
  );
}

export default ItemCardHome;
