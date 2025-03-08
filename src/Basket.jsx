import React from "react";
import Navs from "./Navs";
import StoreName from "./StoreName";
import BasketContainer from "./BasketInnerSection";

const Basket = () => {
  const Buttons = (prop) => {
    return (
      <button className={prop.className} type="button">
        {prop.buttonText}
      </button>
    );
  };

  return (
    <div>
      <StoreName />
      <Navs />
      <BasketContainer />
      <div className="checkout-clear">
        <Buttons buttonText="CheckOut" className="checkout" />
        <Buttons buttonText="Clear Basket" className="clearBasket" />
      </div>
    </div>
  );
};

export default Basket;
