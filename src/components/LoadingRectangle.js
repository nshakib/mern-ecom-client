import React from "react";

export default function LoadingRectangle({ height, width }) {
  return (
    <div style={{ height: `${height}`, width: `${width}` }} className="loading-rectangle"></div>
  );
}
