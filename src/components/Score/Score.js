import React from "react";
import "./Score.css";

export default function Score(props) {
  return (
    <div
      className="score"
      style={{ color: "white", position: "relative", left: "26%" }}
    >
      <h3>Score: {props.score}</h3>
    </div>
  );
}
