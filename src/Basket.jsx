import React from "react";
import Navs from "./Navs";
import StoreName from "./StoreName";
import BasketContainer from "./BasketInnerSection";

const Buttons = (prop) => {
  return (
    <button className={prop.className} type="button" onClick={prop.onClick}>
      {prop.buttonText}
    </button>
  );
};

const Basket = () => {
  return (
    <div>
      <StoreName />
      <Navs />
      <BasketContainer />
      <div className="checkout-clear">
        <Buttons buttonText="CheckOut" className="checkout" />
      </div>
    </div>
  );
};

export default Basket;
export { Buttons };
