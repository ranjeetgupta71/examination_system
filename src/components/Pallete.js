import React from "react";
import Card from "react-bootstrap/Card";
import Legends from "./Legends";

import "./Pallete.css";

const Pallete = ({ currentIndex, totalPages, visited, userAnswer, handleQuestionNavigation }) => {
  const findPalleteColor = (palleteIndex) => {
    if (currentIndex === palleteIndex) {
      return "blue";
    } else if (userAnswer[palleteIndex]) {
      return "green";
    } else if (visited[palleteIndex] && userAnswer[palleteIndex] === null) {
      return "red";
    } else {
      return "#dddddd";
    }
  };

  const handleClick = (i) => {
    handleQuestionNavigation(i);
  };

  return (
    <Card className="pallete-card">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className="pallete-btn"
          style={{
            backgroundColor: findPalleteColor(index),
            color: currentIndex === index ? "white" : "block",
          }}
        >
          {index + 1}
        </button>
      ))}

      <Legends />
    </Card>
  );
};

export default Pallete;
