import React, { useEffect, useState } from "react";
import "./ExamPage.css";
import Timer from "../Timer";
import Pallete from "../Pallete";
import Question from "../Questions";
import Legends from "../Legends";
import ResultPage from "../ResultPage";

const Questions = () => {
  const [index, setIndex] = useState(0);
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
  };

  const reset = () => {
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[index] = null;
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
              index={index}
              userAnswer={userAnswer}
              handleOptionClick={handleOptionClick}
            />
            <Pallete
              index={index}
              totalPages={5}
              visited={visited}
              userAnswer={userAnswer}
              handleQuestionNavigation={handleQuestionNavigation}
            />
          </div>

          <div style={{ margin: "20px" }}>
            <button type="button" onClick={prev} disabled={index === 0}>
              Prev
            </button>
            <button type="button" onClick={next} disabled={index === 4}>
              Next
            </button>
            <button type="button" onClick={reset} disabled={userAnswer[index] === null}>
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
