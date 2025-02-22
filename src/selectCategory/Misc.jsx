import React from "react";
import StoreName from "../StoreName";
import Navs from "../Navs";
import Image from "../FetchData";
import MiscItems from "../miscCategory/MiscItems";

const Misc = () => {
  const [productA, productB, productC] = MiscItems();
  return (
    <div>
      <StoreName />
      <Navs />
      <Image productA={productA} productB={productB} productC={productC} />
    </div>
  );
};

export default Misc;
