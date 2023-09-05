import React, { useState } from "react";
import "./Questions.css";
import Timer from "./Timer";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(Array(5).fill(null));
  const [totalMarks, setTotalMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handler = (event) => {
    const selectedOption = event.target.value;
    console.log("selectedOption: ", selectedOption);
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[index] = selectedOption;
    setUserAnswer(updatedUserAnswer);

    console.log("User Answers:", updatedUserAnswer);
  };

  const totalPages = 5;

  const prev = () => {
    if (index > 0) setIndex((prevIndex) => prevIndex - 1);
  };

  const next = () => {
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
      console.log("userAnwser : ", userAnswer[i]);
      if (userSelectedAnswer === correctAnswer) {
        setTotalMarks(totalMarks + 1);
      }
    }
    console.log("39: ", totalMarks);
  };

  const reset = () => {
    setUserAnswer(Array(5).fill(null));
    setTotalMarks(0);
    setIndex(0);
  };

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

  console.log("totalScore", totalMarks);

  return (
    <>
      <Timer submit={submit} submitted={submitted} />
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
                          onChange={handler}
                          checked={userAnswer[index] === questionsAnswerData[index].option1}
                        />{" "}
                        {questionsAnswerData[index].option1}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`choice_${index}`}
                          value={`${questionsAnswerData[index].option2}`}
                          onChange={handler}
                          checked={userAnswer[index] === questionsAnswerData[index].option2}
                        />{" "}
                        {questionsAnswerData[index].option2}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`choice_${index}`}
                          value={`${questionsAnswerData[index].option3}`}
                          onChange={handler}
                          checked={userAnswer[index] === questionsAnswerData[index].option3}
                        />{" "}
                        {questionsAnswerData[index].option3}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`choice_${index}`}
                          value={`${questionsAnswerData[index].option4}`}
                          onChange={handler}
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
                      <button onClick={reset} disabled={submitted === true}>
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
              <button
                onClick={() => {
                  setIndex(0);
                }}
              >
                1
              </button>
              <button
                onClick={() => {
                  setIndex(1);
                }}
              >
                2
              </button>
              <button
                onClick={() => {
                  setIndex(2);
                }}
              >
                3
              </button>
              <br />
              <button
                onClick={() => {
                  setIndex(3);
                }}
              >
                4
              </button>
              <button
                onClick={() => {
                  setIndex(4);
                }}
              >
                5
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="square-box-green"></div>Submitted
            <div className="square-box-red"></div>Unattempted
            <div className="square-box-visited"></div>visited + Unattempted
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
