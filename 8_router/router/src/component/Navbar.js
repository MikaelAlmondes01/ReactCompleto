import React from "react";
import { Link } from "react-router-dom";
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
