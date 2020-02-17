import React from "react";

import "./Obstacle.css";

export default function Obstacle({ type, style }) {
  return (
    <div
      className={`obstacle obstacle-${type}`}
      style={{
        top: style.y,
        left: style.x
      }}
    />
  );
}
