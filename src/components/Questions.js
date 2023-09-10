import React, { useEffect } from "react";

const QuizQuestions = ({ onDataReceived, index, userAnswer, handleOptionClick }) => {
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
        {index + 1}. {questionsAnswerData[index].question}
      </h1>
      <div className="quesOption">
        <form className="options">
          {Array.from({ length: 4 }).map((_, option) => (
            <label>
              <input
                type="radio"
                name={`choice_${index}`}
                value={`${questionsAnswerData[index].options[option]}`}
                onChange={handleOptionClick}
                checked={userAnswer[index] === questionsAnswerData[index].options[option]}
              />{" "}
              {questionsAnswerData[index].options[option]}
            </label>
          ))}
        </form>
      </div>
    </>
  );
};
export default QuizQuestions;
