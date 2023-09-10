import React from "react";

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
