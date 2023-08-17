import React from "react";

const ScoreDisplay = ({ value, time }) => {
  return (
    <div id="Score-display">
      <div id="timer">
        <h3>Time: {time}</h3>
      </div>

      <div id="score">
        <h3>Score: {value}</h3>
      </div>
    </div>
  );
};

export default ScoreDisplay;
