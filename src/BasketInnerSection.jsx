//this module contains the code for the inner section of the basket page

import React, { useState } from "react";
import PropTypes from "prop-types";

const BasketItems = ({ item1, item2, item3 }) => {
  const [itemCountItemA, setItemCountItemA] = useState(0);
  const [itemCountItemB, setItemCountItemB] = useState(0);
  const [itemCountItemC, setItemCountItemC] = useState(0);

  const handleChange1 = (event) => setItemCountItemA(event.target.value);
  const handleChange2 = (event) => setItemCountItemB(event.target.value);
  const handleChange3 = (event) => setItemCountItemC(event.target.value);

  const clearBasket = (setItemCount, itemCountItem) => {
    setItemCount((itemCountItem = 0));
  };

  const InputElement = ({ change, currentVal }) => {
    return <input onChange={change} value={currentVal} type="number" min="0" />;
  };

  return (
    <div className="itemsOnSale">
      <div className="items">
        <p>{item1}</p>
        <InputElement change={handleChange1} currentVal={itemCountItemA} />
      </div>
      <div className="items">
        <p>{item2}</p>
        <InputElement change={handleChange2} currentVal={itemCountItemB} />
      </div>
      <div className="items">
        <p>{item3}</p>
        <InputElement change={handleChange3} currentVal={itemCountItemC} />
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

//sets the prop types
BasketItems.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
  currentVal: PropTypes.number.isRequired,
};

export default BasketContainer;

/*
//increases number of items in the basket
const addItem = () => {
  setItemCount((count) => count + 1);
};

//decreases number of items in the basket
const removeItem = () => {
  // @ts-ignore
  setItemCount((count) => {
    count > 0 ? count - 1 : 0;
  });
};
*/
