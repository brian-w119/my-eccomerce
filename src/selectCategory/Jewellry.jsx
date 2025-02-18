import React from "react";
import StoreName from "../StoreName";
import Navs from "../Navs";
import Image from "../FetchData";
import JewellryValues from "../jewellryCategory/JewellryCode";

const Jewellry = () => {
  const [productA, productB, productC] = JewellryValues();
  return (
    <div>
      <StoreName />
      <Navs />
      <Image productA={productA} productB={productB} productC={productC} />
    </div>
  );
};

export default Jewellry;
