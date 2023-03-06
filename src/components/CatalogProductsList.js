import "../styles/App.css";
import React from "react";
import ItemCard from "./ItemCard";

function CatalogProductsList({ data }) {
  let filter = data;


  return (
    <div className="catalog-card-wrapper">
      {filter.map((info) => {
        return <ItemCard key={info._id} product={info} />;
      })}
    </div>
  );
}

export default CatalogProductsList;
