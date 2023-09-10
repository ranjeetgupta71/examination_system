import React, { useEffect, useState } from "react";
import "./ExamPage.css";
import Timer from "../Timer";
import Pallete from "../Pallete";
import Question from "../Questions";
import Legends from "../Legends";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(Array(5).fill(null));
  const [totalMarks, setTotalMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [visited, setVisited] = useState(Array(5).fill(false));
  const totalPages = 5;
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

    for (let i = 0; i < questionsAnswerData.length; i++) {
      var correctAnswer = questionsAnswerData[i].answer;
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

  return (
    <>
      <Timer totalMarks={totalMarks} submit={submit} submitted={submitted} />
      {!submitted && (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Pallete
              index={index}
              totalPages={totalPages}
              visited={visited}
              userAnswer={userAnswer}
              handleQuestionNavigation={handleQuestionNavigation}
            />
          </div>
          <Question
            onDataReceived={handleData}
            index={index}
            userAnswer={userAnswer}
            handleOptionClick={handleOptionClick}
          />
          <div>
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
          </div>
          <Legends />
        </>
      )}
    </>
  );
};

export default Questions;
