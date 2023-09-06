import React from "react";

const Pallete = ({ index: current, totalPages, visited, userAnswer, handleQuestionNavigation }) => {
  const findPalleteColor = (i) => {
    if (current === i) {
      return "blue";
    } else if (userAnswer[i]) {
      return "green";
    } else if (visited[i] && userAnswer[i] === null) {
      return "red";
    } else {
      return "#808080";
    }
  };

  const handleClick = (i) => {
    handleQuestionNavigation(i, visited);
  };

  return (
    <div>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          style={{ backgroundColor: findPalleteColor(index) }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pallete;
