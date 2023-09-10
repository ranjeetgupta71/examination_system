import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Login from "./components/Login";
import ExamPage from "./components/ExamPage";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleParentSubmit = (submitted) => {
    setIsLoggedIn(submitted);
  };

  return (
    <div className="app">
      <Container>
        {isLoggedIn ? <ExamPage /> : <Login handleParentSubmit={handleParentSubmit} />}
      </Container>
    </div>
  );
};

export default App;
