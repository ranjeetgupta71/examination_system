import React, { useState } from "react";
import Login from "./Login";
import ExamPage from "./ExamPage";

const MainPage = () => {
  const [submitted, setSubmitted] = useState(true);

  const handleParentSubmit = (submitted) => {
    setSubmitted(submitted);
  };

  return (
    <div>
      {submitted ? (
        <ExamPage />
      ) : (
        <Login handleParentSubmit={handleParentSubmit} />
      )}
    </div>
  );
};

export default MainPage;
