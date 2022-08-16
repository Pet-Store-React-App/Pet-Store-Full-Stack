import Navbar from "./Navbar";
import React from "react";

const CreateAccount = () => {
  return (
    <div>
      <Navbar />
      <div className="App-header">
        <h1>Create Account</h1>
      </div>
    <div className="Form">
      <form >
        <label className="name">Full Name: </label>
        <input type="text"></input>

        <br />
        <br />
       

        <label className="createEmail">Email: </label>
        <input type="email"></input>

        <br />
        <br />

        <label className="createPass">Password: </label>
        <input type="password"></input>

        <br />
        <br />

        <label className="verifyPass"> Re-Enter Password: </label>
        <input type="password"></input>

        <br />
        <br />

        <label className="phone">Phone Number: </label>
        <input type="text"></input>

        <br />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  );
};

export default CreateAccount;
