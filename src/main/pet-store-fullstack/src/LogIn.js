import Navbar from "./Navbar";
import React from "react";

const LogIn = () => {
  return (
    <div>
      <Navbar />
      <div className="App-header">
        <h1>Log In</h1>
      </div>
    <div className="Form">
      <form >
        <label>Email: </label>
        <input type="email"></input>

        <br />

        <label>Password: </label>
        <input type="password"></input>

        <br />
        <input type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  );
};

export default LogIn;
