import React from "react";
import Card from "react-bootstrap/Card";
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
    <Card>
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
    </Card>
  );
};

export default Pallete;
