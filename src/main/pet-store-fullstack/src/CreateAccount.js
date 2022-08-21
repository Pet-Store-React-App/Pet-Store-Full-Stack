import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import React from "react";

function CreateAccount() {
  const vals = { fullName: "", email: "", phone: "", password: "" };
  const [values, setValues] = useState(vals);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      alert("Account created successfully");
    }
    // eslint-disable-next-line
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    const regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    // eslint-disable-next-line
    const regPhone =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!values.fullName) {
      errors.fullName = "Full name is required";
    } else if (!regName.test(values.fullName)) {
      errors.fullName = "Full name is invalid";
    } else if (!values.email) {
      errors.email = "E-mail Address is required";
    } else if (!regEmail.test(values.email)) {
      errors.email = "E-mail Address is invalid";
    } else if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!regPhone.test(values.phone)) {
      errors.phone = "Phone number is invalid";
    } else if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div>
      <Navbar />
      <div className="App-header">
        <h1>Create Account</h1>
      </div>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label className="name">Full Name: </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          <br />
          <p className="Error">{errors.fullName}</p>

          <label className="createEmail">Email: </label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <br />
          <p className="Error">{errors.email}</p>

          <label className="phone">Phone Number: </label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          <br />
          <p className="Error">{errors.phone}</p>

          <label className="createPass">Password: </label>
          <input
            value={values.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
          <br />
          <p className="Error">{errors.password}</p>

          <label className="verifyPass"> Re-Enter Password: </label>
          <input
            value={values.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
          <br />
          <p className="Error">{errors.password}</p>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
