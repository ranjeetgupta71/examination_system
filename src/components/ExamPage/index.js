import React, { useEffect, useState } from "react";
import Timer from "../Timer";
import Pallete from "../Pallete";
import Question from "../Question";
import Legends from "../Legends";
import ResultPage from "../ResultPage";

import "./index.css";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(Array(5).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [visited, setVisited] = useState(Array(5).fill(false));
  const [questionsAnswerData, setQuestionsAnswerData] = useState([]);

  const handleData = (data) => {
    setQuestionsAnswerData(data);
  };

  useEffect(() => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[0] = true;
    setVisited(updateVisitedArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (event) => {
    const selectedOption = event.target.value;
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[currentQuestionIndex] = selectedOption;

    setUserAnswer(updatedUserAnswer);
  };

  const handleQuestionNavigation = (indexFromPallete) => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[indexFromPallete] = true;
    setVisited(updateVisitedArray);
    setCurrentQuestionIndex(indexFromPallete);
  };

  const prev = () => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[currentQuestionIndex] = true;
    setVisited(updateVisitedArray);
    console.log("visited prev: ", visited);
    if (currentQuestionIndex > 0) setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const next = () => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[currentQuestionIndex] = true;
    setVisited(updateVisitedArray);
    console.log("visited next : ", visited);
    // setVisited[currentQuestionIndex] = true;
    if (currentQuestionIndex < 4) {
      console.log("14", currentQuestionIndex);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const submit = () => {
    setSubmitted(true);
  };

  const reset = () => {
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[currentQuestionIndex] = null;
    setUserAnswer(updatedUserAnswer);
  };

  return (
    <>
      {submitted ? (
        <ResultPage userAnswer={userAnswer} questionsAnswerData={questionsAnswerData} />
      ) : (
        <>
          <Timer submit={submit} submitted={submitted} />
          <div style={{ display: "flex", flexDirection: "col", margin: "20px" }}>
            <Question
              onDataReceived={handleData}
              currentQuestionIndex={currentQuestionIndex}
              userAnswer={userAnswer}
              handleOptionClick={handleOptionClick}
            />
            <Pallete
              currentIndex={currentQuestionIndex}
              totalPages={5}
              visited={visited}
              userAnswer={userAnswer}
              handleQuestionNavigation={handleQuestionNavigation}
            />
          </div>

          <div style={{ margin: "20px" }}>
            <button type="button" onClick={prev} disabled={currentQuestionIndex === 0}>
              Prev
            </button>
            <button type="button" onClick={next} disabled={currentQuestionIndex === 4}>
              Next
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={userAnswer[currentQuestionIndex] === null}
            >
              Reset{" "}
            </button>
            <button type="button" onClick={submit} disabled={submitted === true}>
              Submit
            </button>
          </div>
          <Legends />
        </>
      )}
    </>
  );
};

export default Questions;
