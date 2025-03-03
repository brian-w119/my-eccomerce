import React from "react";
import StoreName from "../StoreName";
import Navs from "../Navs";
import Image from "../FetchData";
import MiscItems from "../miscCategory/MiscItems";
import AddToBasket from "../UserInstruction";

const Misc = () => {
  const [productA, productB, productC] = MiscItems();
  return (
    <div>
      <StoreName />
      <Navs />
      <AddToBasket />
      <Image productA={productA} productB={productB} productC={productC} />
    </div>
  );
};

export default Misc;
