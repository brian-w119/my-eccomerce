import React from "react";
import { Link } from "react-router-dom";
import Navs from "./Navs";
import StoreName from "./StoreName";
import watch from "./assets/watch.png";
import sweatBottom from "./assets/sweatBottom.png";
import tShirt from "./assets/tShirt.png";
import "./style.css";

const Category = () => {
  return (
    <div className="cats">
      <StoreName />
      <Navs />
      <nav>
        <ul className="categories">
          <Link className="img">
            <img src={watch} />
            {<div className="text">Jewellry</div>}
          </Link>
          <Link className="img">
            <img src={sweatBottom} />
            {<div className="text">sweatpants</div>}
          </Link>
          <Link className="description img">
            <img src={tShirt} />
            {<div className="text">T-Shirts</div>}
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
