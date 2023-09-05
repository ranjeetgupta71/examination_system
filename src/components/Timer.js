import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const { submit, submitted } = props;
  const [time, setTime] = useState(12000);

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
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      Time Left: {minutes.toString().padStart(2, "0") + "m"}:{" "}
      {seconds.toString().padStart(2, "0") + "s"}
    </div>
  );
};

export default Timer;
