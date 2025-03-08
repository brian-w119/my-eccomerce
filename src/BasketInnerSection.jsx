//this module contains the code for the inner section of the basket page

import React from "react";
import PropTypes from "prop-types";

const InputElement = () => {
  return <input min="0" type="number" />;
};

const BasketItems = ({ item1, item2, item3 }) => {
  return (
    <div className="itemsOnSale">
      <div className="items">
        <p>{item1}</p>
        <InputElement />
      </div>
      <div className="items">
        <p>{item2}</p>
        <InputElement />
      </div>
      <div className="items">
        <p>{item3}</p>
        <InputElement />
      </div>
    </div>
  );
};

const BasketContainer = () => {
  //the below 9 variables represent the all the items for sale
  const jewellryA = "Rose Gold Plated Plug Earrings";
  const jewellryB = "Naga Gold & Silver Dragon Station Chain Bracelet";
  const jewellryC = "Solitaire Diamond Promise Ring";

  const miscItemA = "Rucksack";
  const miscItemB = "Mens Cotton Jacket";
  const miscItemC = " Women's 3-in-1 Snowboard Jacket Winter Coats";

  const tShirtA = "Mens Casual Premium Slim Fit T-Shirts";
  const tShirtB = "Mens Casual Slim Fit";
  const tShirtC = "Solid Short Sleeve Boat Neck V";

  return (
    <div className="basket">
      <div className="category1">
        <h2 className="basketFirstCat">Jewellry Category</h2>
        <BasketItems item1={jewellryA} item2={jewellryB} item3={jewellryC} />
      </div>
      <div className="category2">
        <h2 className="basketSecondCat">Misc. Category</h2>
        <BasketItems item1={miscItemA} item2={miscItemB} item3={miscItemC} />
      </div>
      <div className="category3">
        <h2 className="basketThirdCat">T-Shirt Category</h2>
        <BasketItems item1={tShirtA} item2={tShirtB} item3={tShirtC} />
      </div>
    </div>
  );
};

BasketItems.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
};

export default BasketContainer;
