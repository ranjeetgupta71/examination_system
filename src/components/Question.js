import React, { useEffect } from "react";

const Question = ({ onDataReceived, currentQuestionIndex, userAnswer, handleOptionClick }) => {
  const questionsAnswerData = [
    {
      question: "Capital of India?",
      options: ["Delhi", "Kolkata", "UP", "None"],
      answer: "Delhi",
    },
    {
      question: "Capital of Bihar?",
      options: ["Delhi", "Kolkata", "UP", "Patna"],
      answer: "Patna",
    },
    {
      question: "Capital of WB?",
      options: ["Delhi", "Kolkata", "UP", "Patna"],
      answer: "Kolkata",
    },
    {
      question: "Capital of UP?",
      options: ["Delhi", "Kolkata", "UP", "Lucknow"],
      answer: "Lucknow",
    },
    {
      question: "Capital of Gujrat?",
      options: ["Delhi", "Kolkata", "GandhiNagar", "Patna"],
      answer: "Gandhinagar",
    },
  ];

  useEffect(() => {
    onDataReceived(questionsAnswerData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>
        {currentQuestionIndex + 1}. {questionsAnswerData[currentQuestionIndex].question}
      </h1>
      <div className="quesOption">
        <form className="options">
          {Array.from({ length: 4 }).map((_, index) => (
            <label>
              <input
                type="radio"
                name={`choice_${currentQuestionIndex}`}
                value={`${questionsAnswerData[currentQuestionIndex].options[index]}`}
                onChange={handleOptionClick}
                checked={
                  userAnswer[currentQuestionIndex] ===
                  questionsAnswerData[currentQuestionIndex].options[index]
                }
              />{" "}
              {questionsAnswerData[currentQuestionIndex].options[index]}
            </label>
          ))}
        </form>
      </div>
    </>
  );
};
export default Question;
