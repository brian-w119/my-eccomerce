import React from "react";
import Navs from "./Navs";
import StoreName from "./StoreName";
import "./style.css";

const Contact = () => {
  const contactInfo = [
    "UK - +(44)1234 4444, ukemail@azure.com",
    "USA - +1(907) 7865443, usaemail@azure.com",
    "Canada - +3(807) 77878 777, canadaemail@azure.com",
    "Mexico - +6(566) 99887 59855, mexicoemail@azure.com",
  ];
  const contactDetails = contactInfo.map((countries) => (
    <li key={countries}>{countries}</li>
  ));
  return (
    <div>
      <StoreName />
      <Navs />
      <p className="paragraph3">
        See the contact details for our various locations
      </p>
      <div className="list">
        <ul>{contactDetails}</ul>
      </div>
    </div>
  );
};

export default Contact;
