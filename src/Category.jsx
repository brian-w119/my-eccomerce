import React from "react";
import { Link } from "react-router-dom";
import Navs from "./Navs";
import StoreName from "./StoreName";
import watch from "./assets/watch.png";
import miscImages from "./assets/miscImages.png";
import tShirt from "./assets/tShirt.png";
import "./style.css";

const Category = () => {
  return (
    <div className="cats">
      <StoreName />
      <Navs />
      <nav>
        <ul className="categories">
          <Link className="img" to="/category/jewellry">
            <img src={watch} />
            {<div className="text">Jewellry</div>}
          </Link>
          <Link className="img misc" to="/category/miscallaneous">
            <img className="miscIm" src={miscImages} />
            {<div className="text">Miscellaneous Clothing</div>}
          </Link>
          <Link className="description img" to="/category/tshirts">
            <img src={tShirt} />
            {<div className="text">T-Shirts</div>}
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
