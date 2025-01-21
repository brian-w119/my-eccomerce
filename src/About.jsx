import React from "react";
import Navs from "./Navs";
import StoreName from "./StoreName";

const About = () => {
  return (
    <div>
      <StoreName />
      <Navs />
      <p className="paragraph1">
        Azure Fashions was founded in 1980 by two brothers who were passionate
        about clothing. The beginnings were humble, starting from their parent`s
        garage. Today it has grown, and has outlets in the USA, Canada and
        Mexico.
      </p>
      <p className="paragraph2">
        With an emphasis on sustainable and ethical practises, Azure Fashions
        has won international recognition for our treatment of employees and
        work practises.
      </p>
    </div>
  );
};

export default About;
