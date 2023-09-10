import React from "react";
import "./Login.css";

const Login = ({ handleParentSubmit }) => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
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
              className="btn btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                marginLeft: "36%",
              }}
              onClick={() => handleParentSubmit("true")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
