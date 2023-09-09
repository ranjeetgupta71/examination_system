import React, { useState } from "react";
import Login from "./components/Login";
import ExamPage from "./components/ExamPage/ExamPage";

const App = () => {
  const [submitted, setSubmitted] = useState(true);

  const handleParentSubmit = (submitted) => {
    setSubmitted(submitted);
  };

  return <div>{submitted ? <ExamPage /> : <Login handleParentSubmit={handleParentSubmit} />}</div>;
};

export default App;
