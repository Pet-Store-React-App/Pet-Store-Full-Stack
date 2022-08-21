import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="btn">
        <Link to="/">Home</Link>
      </div>
      {/* <div className="btn">
        <Link to="/products">Products</Link>
      </div> */}
      <div className="btn">
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="btn">
        <Link to="/LogIn">Log In</Link>
      </div>
      
    </div>
  );
};

export default Navbar;
