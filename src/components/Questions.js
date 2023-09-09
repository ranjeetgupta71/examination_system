import React, { useEffect } from "react";

const QuizQuestions = ({ onDataReceived, index, userAnswer, handleOptionClick }) => {
  const questionsAnswerData = [
    {
      Question: "Capital of India?",
      option1: "Delhi",
      option2: "Kolkata",
      option3: "UP",
      option4: "None",
      Answer: "Delhi",
    },
    {
      Question: "Capital of Bihar?",
      option1: "Patna",
      option2: "Kolkata",
      option3: "UP",
      option4: "None",
      Answer: "Patna",
    },
    {
      Question: "Capital of WB?",
      option1: "Delhi",
      option2: "Kolkata",
      option3: "UP",
      option4: "None",
      Answer: "Kolkata",
    },
    {
      Question: "Capital of UP?",
      option1: "Delhi",
      option2: "Kolkata",
      option3: "Lucknow",
      option4: "None",
      Answer: "Lucknow",
    },
    {
      Question: "Capital of Gujrat?",
      option1: "Delhi",
      option2: "Kolkata",
      option3: "UP",
      option4: "Gandhinagar",
      Answer: "Gandhinagar",
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
          {index + 1}. {questionsAnswerData[index].Question}
        </h1>
        <div className="quesOption">
          <div>
            <div>
              <form className="options">
                <label>
                  <input
                    type="radio"
                    name={`choice_${index}`}
                    value={`${questionsAnswerData[index].option1}`}
                    onChange={(event) => handleOptionClick(event, 1)}
                    checked={userAnswer[index] === questionsAnswerData[index].option1}
                  />{" "}
                  {questionsAnswerData[index].option1}
                </label>
                <label>
                  <input
                    type="radio"
                    name={`choice_${index}`}
                    value={`${questionsAnswerData[index].option2}`}
                    onChange={handleOptionClick}
                    checked={userAnswer[index] === questionsAnswerData[index].option2}
                  />{" "}
                  {questionsAnswerData[index].option2}
                </label>
                <label>
                  <input
                    type="radio"
                    name={`choice_${index}`}
                    value={`${questionsAnswerData[index].option3}`}
                    onChange={handleOptionClick}
                    checked={userAnswer[index] === questionsAnswerData[index].option3}
                  />{" "}
                  {questionsAnswerData[index].option3}
                </label>
                <label>
                  <input
                    type="radio"
                    name={`choice_${index}`}
                    value={`${questionsAnswerData[index].option4}`}
                    onChange={handleOptionClick}
                    checked={userAnswer[index] === questionsAnswerData[index].option4}
                  />{" "}
                  {questionsAnswerData[index].option4}
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizQuestions;
