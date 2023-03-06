import React from "react";

export default function LoadingBox() {
  return (
    <div className="loading-wrapper">
      <div className="loading-item">
        <div className="loading-item-header"></div>
        <div className="loading-item-body">
          <div className="loading-card-title"></div>
          <div className="loading-card-sec-title"></div>
          <div className="loading-card-footer">
            <div className="loading-footer-price"></div>
            <div className="loading-footer-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
