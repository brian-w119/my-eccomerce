//import React from "react";

const JewellryValues = () => {
  const baseUrl = "https://fakestoreapi.com/products/";
  const productID1 = 8;
  const productID2 = 5;
  const productID3 = 7;
  const product1 = `${baseUrl}${productID1}`;
  const product2 = `${baseUrl}${productID2}`;
  const product3 = `${baseUrl}${productID3}`;
  const jewellry = [product1, product2, product3];

  const values = [
    productID1,
    productID2,
    productID3,
    product1,
    product2,
    product3,
    jewellry,
  ];

  return values;
};

export default JewellryValues;
