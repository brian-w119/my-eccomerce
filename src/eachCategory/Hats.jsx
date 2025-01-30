import React from "react";
import StoreName from "../StoreName";
import Navs from "../Navs";
import redHat from "../assets/redHat.png";
import hat from "../assets/hat.png";
import babyBlue from "../assets/babyBlue.png";
import { Link } from "react-router-dom";

const Hat2 = () => {
  return (
    <div>
      <StoreName />
      <Navs />
      <div className="hatVarieties">
        <img src={redHat} />
        <img src={hat} />
        <img src={babyBlue} />
      </div>
    </div>
  );
};

export default Hat2;
