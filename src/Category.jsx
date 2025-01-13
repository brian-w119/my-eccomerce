import React from "react";
import { Link } from "react-router-dom";
import Navs from "./Navs";
import StoreName from "./StoreName";
import hat from "./assets/hat.png";
import hoodies from "./assets/hoodies.png";
import sweatBottom from "./assets/sweatBottom.png";
import tShirt from "./assets/tShirt.png";

const Category = () => {
  return (
    <div>
      <StoreName />
      <Navs />
      <nav>
        <ul className="categories">
          <Link>
            <img src={hat} />
          </Link>
          <Link>
            <img src={hoodies} />
          </Link>
          <Link>
            <img src={sweatBottom} />
          </Link>
          <Link>
            <img src={tShirt} />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
