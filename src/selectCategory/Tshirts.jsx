import React from "react";
import StoreName from "../StoreName";
import Navs from "../Navs";
import Image from "../FetchData";
import Tshirt from "../t-shirtcategory/Tshirt";
import AddToBasket from "../UserInstruction";

const Tshirts = () => {
  const [productA, productB, productC] = Tshirt();
  return (
    <div>
      <StoreName />
      <Navs />
      <AddToBasket />
      <Image productA={productA} productB={productB} productC={productC} />
    </div>
  );
};

export default Tshirts;
