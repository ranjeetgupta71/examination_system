import React from "react";
import Card from "react-bootstrap/Card";

import "./Login.css";

const Login = ({ handleParentSubmit }) => {
  return (
    <div className="login-page">
      <Card className="login-form">
        <h2 className="title">Login</h2>
        <div>
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="ok">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="ok"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                onClick={() => handleParentSubmit("true")}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
