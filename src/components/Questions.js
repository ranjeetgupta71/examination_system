import React, { useEffect, useState } from "react";
import "./Questions.css";
import Timer from "./Timer";
import Pallete from "./Pallete";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(Array(5).fill(null));
  const [totalMarks, setTotalMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [visited, setVisited] = useState(Array(5).fill(false));
  const totalPages = 5;

  useEffect(() => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[0] = true;
    setVisited(updateVisitedArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (event) => {
    const selectedOption = event.target.value;
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[index] = selectedOption;
    setUserAnswer(updatedUserAnswer);
  };

  const handleQuestionNavigation = (indexFromPallete, visited) => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[indexFromPallete] = true;
    setVisited(updateVisitedArray);
    setIndex(indexFromPallete);
  };

  const prev = () => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[index] = true;
    setVisited(updateVisitedArray);
    console.log("visited prev: ", visited);
    if (index > 0) setIndex((prevIndex) => prevIndex - 1);
  };

  const next = () => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[index] = true;
    setVisited(updateVisitedArray);
    console.log("visited next : ", visited);
    // setVisited[index] = true;
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

  const reset = () => {
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[index] = null;
    setUserAnswer(updatedUserAnswer);
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
                      <button type="button" onClick={prev} disabled={index === 0}>
                        Prev
                      </button>
                      <button type="button" onClick={next} disabled={index === totalPages - 1}>
                        Next
                      </button>
                      <button type="button" onClick={reset} disabled={userAnswer[index] === null}>
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

            <Pallete
              index={index}
              totalPages={totalPages}
              visited={visited}
              userAnswer={userAnswer}
              handleQuestionNavigation={handleQuestionNavigation}
            />
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
