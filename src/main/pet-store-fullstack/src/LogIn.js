import { useEffect, useState } from "react";

import App from "./App"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

function LogIn() {
  const result = () => {
    alert("You are now logged in");
  };

  const vals = { email: "", password: "" };
  const [values, setValues] = useState(vals);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    
    setErrors(validate(values));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    const regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    // eslint-disable-next-line

    if (!values.email) {
      errors.email = "E-mail Address is required";
    } else if (!regEmail.test(values.email)) {
      errors.email = "E-mail Address is invalid";
    } else if (!values.password) {
      errors.phone = "Password is required";
    }

    return errors;
  };

  return (
    <div>
      <Navbar />
      <div className="App-header">
        <h1>Log In</h1>
      </div>
      <div className="Form">
        <form className="logInForm" onSubmit={handleSubmit}>
          <label>Email: </label>
          <input type="email"></input>

          <br />
          <br />

          <label>Password: </label>
          <input type="password"></input>

          <br />
          <br />

          <input type="submit" value="Submit" onClick={result}></input>
          <br />
          <br />
          <Link className="createLink" to="/Create">
            Create Account
          </Link>
          <br />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
