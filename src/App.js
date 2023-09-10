import React, { useState } from "react";
import Login from "./components/Login";
import ExamPage from "./components/ExamPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleParentSubmit = (submitted) => {
    setIsLoggedIn(submitted);
  };

  return isLoggedIn ? <ExamPage /> : <Login handleParentSubmit={handleParentSubmit} />;
};

export default App;
