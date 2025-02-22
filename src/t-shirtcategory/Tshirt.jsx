import BaseUrl from "../BaseUrl";

const Tshirt = () => {
  const productID1 = 2;
  const productID2 = 4;
  const productID3 = 20;
  const product1 = `${BaseUrl()}${productID1}`;
  const product2 = `${BaseUrl()}${productID2}`;
  const product3 = `${BaseUrl()}${productID3}`;
  const items = [product1, product2, product3];

  return items;
};

export default Tshirt;
