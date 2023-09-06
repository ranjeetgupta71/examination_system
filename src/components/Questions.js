import React, { useEffect, useState } from "react";
import "./Questions.css";
import Timer from "./Timer";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(Array(5).fill(null));
  const [totalMarks, setTotalMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [visited, setVisited] = useState(Array(5).fill(false));

  const handleOptionClick = (event) => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[index] = true;

    setVisited(updateVisitedArray);

    const selectedOption = event.target.value;
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[index] = selectedOption;
    setUserAnswer(updatedUserAnswer);
  };

  const handleColor = (currentIndex) => {
    if (index === currentIndex) {
      return "blue";
    } else if (userAnswer[currentIndex] !== null) {
      return "green";
    } else if (userAnswer[currentIndex] === null && visited[currentIndex] === true) return "red";
    else return "#808080";
  };

  const totalPages = 5;

  const prev = () => {
    setVisited[index] = true;
    if (index > 0) setIndex((prevIndex) => prevIndex - 1);
  };

  const next = () => {
    setVisited[index] = true;
    if (index < 4) {
      console.log("14", index);
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const submit = () => {
    setSubmitted(true);

    for (let i = 0; i < questionsAnswerData.length; i++) {
      var correctAnswer = questionsAnswerData[i].Answer;
      var userSelectedAnswer = userAnswer[i];

      if (userSelectedAnswer === correctAnswer) {
        setTotalMarks((prevState) => prevState + 1);
        console.log("here");
      }
    }
  };

  const reset = () => {};

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

  return (
    <>
      <Timer totalMarks={totalMarks} submit={submit} submitted={submitted} />
      {!submitted && (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
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
                          onChange={handleOptionClick}
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
                      <button type="button" onClick={prev} disabled={index === 0}>
                        Prev
                      </button>
                      <button type="button" onClick={next} disabled={index === totalPages - 1}>
                        Next
                      </button>
                      <button type="button" onClick={reset} disabled={submitted === true}>
                        Reset{" "}
                      </button>
                      <button type="button" onClick={submit} disabled={submitted === true}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  onClick={() => {
                    setIndex(i);
                    setVisited[index] = true;
                  }}
                  key={i}
                  style={{ backgroundColor: handleColor(i) }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="square-box-green"></div>Attempted
            <div className="square-box-red"></div>Unattempted
            <div className="square-box-visited"></div>visited + Unattempted
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
