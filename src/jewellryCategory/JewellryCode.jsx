import BaseUrl from "../BaseUrl";

const JewellryValues = () => {
  // const baseUrl = "https://fakestoreapi.com/products/";
  const productID1 = 8;
  const productID2 = 5;
  const productID3 = 7;
  const product1 = `${BaseUrl()}${productID1}`;
  const product2 = `${BaseUrl()}${productID2}`;
  const product3 = `${BaseUrl()}${productID3}`;
  const jewellry = [product1, product2, product3];

  return jewellry;
};

export default JewellryValues;
