import React, { useEffect, useState } from "react";
import Questions from "./Questions";

const Timer = (props) => {
  const { totalMarks, submit, submitted } = props;
  const [time, setTime] = useState(12000);
  const [showMessage, setShowMessage] = useState(false);

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  const handleTick = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleTick();
    }, 1000);

    if (time === 0 || submitted) {
      submit();
      clearInterval(timer);
      setShowMessage(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, submit, submitted]);

  return (
    <div>
      {showMessage ? (
        <div>
          <p>Congratulation Your Score is {totalMarks}</p>
        </div>
      ) : (
        <div>
          Time Left: {minutes.toString().padStart(2, "0") + "m"}:{" "}
          {seconds.toString().padStart(2, "0") + "s"}
        </div>
      )}
    </div>
  );
};

export default Timer;
