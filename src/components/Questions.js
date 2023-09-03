import React from "react";
import "./Questions.css";

const Questions = () => {
  const submitAnswer = () => {};
  const prev = () => {};
  const next = () => {};
  const reset = () => {};
  const ShowQuestion = (QuesNum) => {};

  return (
    <div>
      <h1>JavaScript is ______ Language.</h1>
      <div className="quesOption">
        <div>
          <div>
            <form className="options">
              <label>
                <input type="radio" name="choice" value="Scripting" /> Scripting
              </label>
              <label>
                <input type="radio" name="choice" value="Programming" /> Programming
              </label>
              <label>
                <input type="radio" name="choice" value="Application" /> Application
              </label>
              <label>
                <input type="radio" name="choice" value="None of These" /> None of These
              </label>
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
              <button onClick={reset}>Reset </button>
              <button onClick={submitAnswer}>Submit Answer</button>
            </form>
          </div>
        </div>
        <div>
          <button onClick={ShowQuestion(1)}>1</button>
          <button onClick={ShowQuestion(2)}>2</button>
          <button onClick={ShowQuestion(3)}>3</button>
          <br />
          <button onClick={ShowQuestion(4)}>4</button>
          <button onClick={ShowQuestion(5)}>5</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
