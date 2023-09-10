import React, { useEffect, useState } from "react";

const Timer = ({ onSubmit }) => {
  const [time, setTime] = useState(12000);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleTick = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleTick();
    }, 1000);

    if (time === 0) {
      onSubmit();
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        width: "180px",
        margin: "10px",
        borderRadius: "4px",
        justifyContent: "center",
      }}
    >
      Time Left: {minutes.toString().padStart(2, "0") + "m"}:{" "}
      {seconds.toString().padStart(2, "0") + "s"}
    </div>
  );
};

export default Timer;
