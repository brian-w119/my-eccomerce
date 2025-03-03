import React from "react";
import Navs from "./Navs";
import StoreName from "./StoreName";
import BasketContainer from "./BasketContainer";

const Basket = () => {
  const Buttons = (prop) => {
    return <button type="button">{prop.buttonText}</button>;
  };

  return (
    <div>
      <StoreName />
      <Navs />
      <BasketContainer />
      <Buttons />
    </div>
  );
};

export default Basket;
