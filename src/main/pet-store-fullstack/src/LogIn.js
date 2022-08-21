import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const result = () => {
  alert("You are now logged in");
};

const LogIn = () => {
  return (
    <div>
      <Navbar />
      <div className="App-header">
        <h1>Log In</h1>
      </div>
      <div className="Form">
        <form className="logInForm">
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
};

export default LogIn;
