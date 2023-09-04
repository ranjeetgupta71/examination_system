import React, { useState } from "react";
import "./Questions.css";

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);

  const userAnswer = [];

  const handler = (event) => {
    // console.log("event", event);
    setSelectedOption(event.target.value);
    userAnswer[index] = selectedOption;
    console.log(userAnswer);
  };

  const totalPages = 5;

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < 4) {
      console.log("14", index);
      setIndex(index + 1);
    }
  };

  const submit = () => {
    //check all answers given
    //calculate the total
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
                    name="choice"
                    value={`${questionsAnswerData[index].option1}`}
                    onChange={handler}
                  />{" "}
                  {questionsAnswerData[index].option1}
                </label>
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={`${questionsAnswerData[index].option2}`}
                    onChange={handler}
                  />{" "}
                  {questionsAnswerData[index].option2}
                </label>
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={`${questionsAnswerData[index].option3}`}
                    onChange={handler}
                  />{" "}
                  {questionsAnswerData[index].option3}
                </label>
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={`${questionsAnswerData[index].option4}`}
                    onChange={handler}
                  />{" "}
                  {questionsAnswerData[index].option4}
                </label>
                <button type="button" onClick={prev} disabled={index === 0}>
                  Prev
                </button>
                <button type="button" onClick={next} disabled={index === totalPages - 1}>
                  Next
                </button>
                <button onClick={reset}>Reset </button>
                <button onClick={submit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => setIndex(0)}>1</button>
        <button onClick={() => setIndex(1)}>2</button>
        <button onClick={() => setIndex(2)}>3</button>
        <br />
        <button onClick={() => setIndex(3)}>4</button>
        <button onClick={() => setIndex(4)}>5</button>
      </div>
    </div>
  );
};

export default Questions;
