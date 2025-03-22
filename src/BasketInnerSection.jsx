//this module contains the code for the inner section of the basket page

import React, { useState } from "react";
import PropTypes from "prop-types";
import StoreName from "./StoreName";
import Navs from "./Navs";
import Basket, { Buttons } from "./Basket";

const BasketItems = ({
  item1,
  item2,
  item3,
  itemCount1,
  setItemCount1,
  itemCount2,
  setItemCount2,
  itemCount3,
  setItemCount3,
  clearAll,
  item1Price,
  setItem1Price,
  item2Price,
  setItem2Price,
  item3Price,
  setItem3Price,
  jewellryAprice,
}) => {
  /*
  const [itemCountItemA, setItemCountItemA] = useState(0);
  const [itemCountItemB, setItemCountItemB] = useState(0);
  const [itemCountItemC, setItemCountItemC] = useState(0);
  */

  let item1P = item1Price;

  //updates the state of the number of an item
  const handleChange1 = (event) => {
    const newCount = parseInt(event.target.value, 10);
    setItemCount1(newCount);
    setItem1Price(item1Price * newCount);
  };
  const handleChange2 = (event) => {
    const newCount = parseInt(event.target.value, 10);
    setItemCount2(newCount);
    setItem2Price(item2Price * newCount);
  };
  const handleChange3 = (event) => {
    const newCount = parseInt(event.target.value, 10);
    setItemCount3(newCount);
    setItem3Price(item3Price * newCount);
  };

  const clear1 = () => {
    setItemCount1(0);
    setItem1Price;
    alert(jewellryAprice);
    setItem1Price(jewellryAprice);
  };
  const clear2 = () => setItemCount2(0);
  const clear3 = () => setItemCount3(0);

  const InputElement = ({ change, currentVal }) => {
    return <input onChange={change} value={currentVal} type="number" min="0" />;
  };

  //div for price for each item
  const PriceDisplay = ({ price }) => {
    return <div className="price">{price}</div>;
  };

  return (
    <div>
      <div className="itemsOnSale">
        <div className="items">
          <p>{item1}</p>
          <InputElement change={handleChange1} currentVal={itemCount1} />
          <PriceDisplay price={item1Price} />
          <Buttons
            className="clearLine"
            buttonText="Clear"
            onClick={() => clear1()}
          />
        </div>
        <div className="items">
          <p>{item2}</p>
          <InputElement change={handleChange2} currentVal={itemCount2} />
          <PriceDisplay price={item2Price} />
          <Buttons
            className="clearLine"
            buttonText="Clear"
            onClick={() => clear2()}
          />
        </div>
        <div className="items">
          <p>{item3}</p>
          <InputElement change={handleChange3} currentVal={itemCount3} />
          <PriceDisplay price={item3Price} />
          <Buttons
            className="clearLine"
            buttonText="Clear"
            onClick={() => clear3()}
          />
        </div>
      </div>
    </div>
  );
};

const BasketContainer = () => {
  const [itemCountJewelryA, setItemCountJewelryA] = useState(0);
  const [itemCountJewelryB, setItemCountJewelryB] = useState(0);
  const [itemCountJewelryC, setItemCountJewelryC] = useState(0);

  const [itemCountMiscA, setItemCountMiscA] = useState(0);
  const [itemCountMiscB, setItemCountMiscB] = useState(0);
  const [itemCountMiscC, setItemCountMiscC] = useState(0);

  const [itemCountTshirtA, setItemCountTshirtA] = useState(0);
  const [itemCountTshirtB, setItemCountTshirtB] = useState(0);
  const [itemCountTshirtC, setItemCountTshirtC] = useState(0);

  const clearAll = () => {
    setItemCountJewelryA(0);
    setItemCountJewelryB(0);
    setItemCountJewelryC(0);
    setItemCountMiscA(0);
    setItemCountMiscB(0);
    setItemCountMiscC(0);
    setItemCountTshirtA(0);
    setItemCountTshirtB(0);
    setItemCountTshirtC(0);
  };

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

  const [jewellryAprice, setJewellryAPrice] = useState(10);
  const [jewellryBPrice, setJewellryBprice] = useState(5);
  const [jewellryCprice, setJewellryCprice] = useState(15);

  const [miscAprice, setMiscAPrice] = useState(11);
  const [miscBPrice, setMiscBprice] = useState(51);
  const [miscCprice, setMiscCprice] = useState(18);

  const [shirtAprice, setShirtAprice] = useState(10);
  const [shirtBprice, setShirtBprice] = useState(5);
  const [shirtCprice, setShirtCprice] = useState(15);

  return (
    <div className="basket">
      <div className="category1">
        <h2 className="basketFirstCat">Jewellry Category</h2>
        <BasketItems
          item1={jewellryA}
          item2={jewellryB}
          item3={jewellryC}
          //
          item1Price={jewellryAprice}
          setItem1Price={setJewellryAPrice}
          item2Price={jewellryBPrice}
          setItem2Price={setJewellryBprice}
          item3Price={jewellryCprice}
          setItem3Price={setJewellryCprice}
          //
          itemCount1={itemCountJewelryA}
          setItemCount1={setItemCountJewelryA}
          itemCount2={itemCountJewelryB}
          setItemCount2={setItemCountJewelryB}
          itemCount3={itemCountJewelryC}
          setItemCount3={setItemCountJewelryC}
          clearAll={clearAll}
        />
      </div>
      <div className="category2">
        <h2 className="basketSecondCat">Misc. Category</h2>
        <BasketItems
          item1={miscItemA}
          item2={miscItemB}
          item3={miscItemC}
          //
          itemCount1={itemCountMiscA}
          setItemCount1={setItemCountMiscA}
          itemCount2={itemCountMiscB}
          setItemCount2={setItemCountMiscB}
          itemCount3={itemCountMiscC}
          setItemCount3={setItemCountMiscC}
          //
          item1Price={miscAprice}
          setItem1Price={setMiscAPrice}
          item2Price={miscBPrice}
          setItem2Price={setMiscBprice}
          item3Price={miscCprice}
          setItem3Price={setMiscCprice}
        />
      </div>
      <div className="category3">
        <h2 className="basketThirdCat">T-Shirt Category</h2>
        <BasketItems
          item1={tShirtA}
          item2={tShirtB}
          item3={tShirtC}
          //
          itemCount1={itemCountTshirtA}
          setItemCount1={setItemCountTshirtA}
          itemCount2={itemCountTshirtB}
          setItemCount2={setItemCountTshirtB}
          itemCount3={itemCountTshirtC}
          setItemCount3={setItemCountTshirtC}
          //
          item1Price={shirtAprice}
          setItem1Price={setShirtAprice}
          item2Price={shirtBprice}
          setItem2Price={setShirtBprice}
          item3Price={shirtCprice}
          setItem3Price={setShirtCprice}
        />
      </div>

      <div>
        <Buttons
          className="reset"
          buttonText="Clear All"
          onClick={() => {
            alert("Clear All Clicked");
            clearAll();
          }}
        />
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
  itemCount1: PropTypes.number.isRequired,
  setItemCount1: PropTypes.func,
  itemCount2: PropTypes.number.isRequired,
  setItemCount2: PropTypes.func,
  itemCount3: PropTypes.number.isRequired,
  setItemCount3: PropTypes.func,
  clearAll: PropTypes.func,
};

export default BasketContainer;
//export { clearBasket };
