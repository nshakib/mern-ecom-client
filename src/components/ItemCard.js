import "../styles/App.css";
import { Link } from "react-router-dom";
import React from "react";

function ItemCard(props) {
  const { product } = props;
  return (
    <Link
      key={product._id}
      to={`/product/${product._id}`}
      className="catalog-card"
    >
      <div className="catalog-card-header">
        <img
          src={product.image}
          alt={product.description}
          className="catalog-card-img"
        />
      </div>
      <div className="catalog-card-body">
        <div className="catalog-card-title">{product.name}</div>
        <div className="catalog-card-sec-title">{product.description}</div>
        <div className="catalog-card-footer">
          <div className="catalog-card-price">{product.price} $</div>
          <div className="catalog-card-button">Buy</div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
