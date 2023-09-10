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

  const handlePrevious = () => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[currentQuestionIndex - 1] = true;
    setVisited(updateVisitedArray);
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    const updateVisitedArray = [...visited];
    updateVisitedArray[currentQuestionIndex + 1] = true;
    setVisited(updateVisitedArray);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[currentQuestionIndex] = null;
    setUserAnswer(updatedUserAnswer);
  };

  if (submitted) {
    return <ResultPage userAnswer={userAnswer} questionsAnswerData={questionsAnswerData} />;
  }

  return (
    <div>
      <Timer onSubmit={() => setSubmitted(true)} />
      <div className="question-pallete-wrapper">
        <div className="question-wrapper">
          <Question
            onDataReceived={handleData}
            currentQuestionIndex={currentQuestionIndex}
            userAnswer={userAnswer}
            handleOptionClick={handleOptionClick}
          />
        </div>
        <div className="pallete-wrapper">
          <Pallete
            currentIndex={currentQuestionIndex}
            totalPages={5}
            visited={visited}
            userAnswer={userAnswer}
            handleQuestionNavigation={handleQuestionNavigation}
          />
        </div>
      </div>

      <div style={{ margin: "10px" }}>
        <button type="button" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentQuestionIndex === questionsAnswerData.length - 1}
        >
          Next
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={userAnswer[currentQuestionIndex] === null}
        >
          Reset{" "}
        </button>
        <button type="submit" onClick={handleSubmit} disabled={submitted}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questions;
