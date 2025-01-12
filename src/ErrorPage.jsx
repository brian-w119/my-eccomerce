import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ErrorPage = () => {
  return (
    <div className="error-message">
      <h1>Oh no, this route does not exist!</h1>
      <Link className="error-link" to="/">
        You can return to the home page by clicking here
      </Link>
    </div>
  );
};

export default ErrorPage;
