import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { questions } from "./../data/question";

import "./Question.css";

const Question = ({ onDataReceived, currentQuestionIndex, userAnswer, handleOptionClick }) => {
  useEffect(() => {
    onDataReceived(questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="question-card">
      <form className="options">
        <h1 className="question-title">
          {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
        </h1>
        <div className="question-option">
          {questions[currentQuestionIndex].options.map((option) => (
            <div>
              <input
                id={option}
                type="radio"
                name={`question[${currentQuestionIndex}]`}
                value={option}
                onChange={handleOptionClick}
                checked={userAnswer[currentQuestionIndex] === option}
              />{" "}
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </form>
    </Card>
  );
};
export default Question;
