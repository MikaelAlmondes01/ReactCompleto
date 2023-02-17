import React from "react";
import { Link } from "react-router-dom";
// 2 - links com react router
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
