import BaseUrl from "../BaseUrl";

const MiscItems = () => {
  const productID1 = 1;
  const productID2 = 3;
  const productID3 = 15;
  const product1 = `${BaseUrl()}${productID1}`;
  const product2 = `${BaseUrl()}${productID2}`;
  const product3 = `${BaseUrl()}${productID3}`;
  const items = [product1, product2, product3];

  return items;
};

export default MiscItems;
