import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navs = () => {
  return (
    <nav>
      <ul className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/category">Categories</Link>
        <Link to="/basket">Basket</Link>
      </ul>
    </nav>
  );
};

export default Navs;
