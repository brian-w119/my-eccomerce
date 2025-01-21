import React from "react";
import Navs from "./Navs";
import StoreName from "./StoreName";
import background from "./assets/background.png";

const Home = () => {
  return (
    <div className="body-color">
      <StoreName />
      <Navs />
      <img className="background-image" src={background} />
    </div>
  );
};

export default Home;
