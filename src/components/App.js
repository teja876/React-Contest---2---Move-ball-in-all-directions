import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  const ballReposition = (x, y) => {
    setBallPosition({ left: `${x}px`, top: `${y}px` });
  };

  const reset = () => {
    setRenderBall(!renderBall);
    setBallPosition(0, 0);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setX(x + 5);
    } else if (event.key === "ArrowDown") {
      setY(y + 5);
    } else if (event.key === "ArrowUp") {
      setY(y - 5);
    } else if (event.key === "ArrowLeft") {
      setX(x - 5);
    }
    console.log(ballPosition.x);
    console.log(ballPosition.y);
    ballReposition(x, y);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const renderChoice = () => {
    if (renderBall)
      return (
        <div
          className="ball"
          style={{ left: ballPosition.left, top: ballPosition.top }}
        ></div>
      );
    return (
      <button
        className="start"
        onClick={() => {
          setRenderBall(!renderBall);
        }}
      >
        start
      </button>
    );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
