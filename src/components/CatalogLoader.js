import '../styles/App.css';
import React from "react";
import LoadingRectangle from './LoadingRectangle';
import LoadingBox from './LoadingBox';

function CatalogLoader() {
  return (
    <>
      <div className="container">
          <div className="catalog-load">
            {[...Array(12)].map((x, i) => (
              <LoadingBox className="catalog-load-card" key={i} />
            ))}
          </div>
        </div>
    </>
  );
}

export default CatalogLoader;
