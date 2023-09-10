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
      Question: "Capital of UP?",
      options: ["Delhi", "Kolkata", "UP", "Lucknow"],
      answer: "Lucknow",
    },
    {
      Question: "Capital of Gujrat?",
      options: ["Delhi", "Kolkata", "GandhiNagar", "Patna"],
      answer: "Gandhinagar",
    },
  ];
  useEffect(() => {
    onDataReceived(questionsAnswerData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <h1>
          {index + 1}. {questionsAnswerData[index].question}
        </h1>
        <div className="quesOption">
          <div>
            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizQuestions;
