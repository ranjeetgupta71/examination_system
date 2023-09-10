import React from "react";
import Legends from "./Legends";

const Pallete = ({ currentIndex, totalPages, visited, userAnswer, handleQuestionNavigation }) => {
  const findPalleteColor = (palleteIndex) => {
    if (currentIndex === palleteIndex) {
      return "blue";
    } else if (userAnswer[palleteIndex]) {
      return "green";
    } else if (visited[palleteIndex] && userAnswer[palleteIndex] === null) {
      return "red";
    } else {
      return "#808080";
    }
  };

  const handleClick = (i) => {
    handleQuestionNavigation(i);
  };

  return (
    <div style={{ border: "1px solid black", padding: "50px" }}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <span key={index}>
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: findPalleteColor(index),
              padding: "10px",
              marginTop: index >= 3 ? "0.4px" : "0",
            }}
          >
            {index + 1}
          </button>
          {index === totalPages - 3 && <br />}
        </span>
      ))}

      <Legends />
    </div>
  );
};

export default Pallete;
