import React from "react";
import StoreName from "../StoreName";
import Navs from "../Navs";
import Image from "../FetchData";
import Tshirt from "../t-shirtcategory/Tshirt";

const Tshirts = () => {
  const [productA, productB, productC] = Tshirt();
  return (
    <div>
      <StoreName />
      <Navs />
      <Image productA={productA} productB={productB} productC={productC} />
    </div>
  );
};

export default Tshirts;
