import { useState, useEffect } from "react";
import React from "react";
import "./style.css";
const Image = () => {
  const baseUrl = "https://fakestoreapi.com/products/";
  const productID1 = 8;
  const productID2 = 5;
  const productID3 = 7;
  const product1 = `${baseUrl}${productID1}`;
  const product2 = `${baseUrl}${productID2}`;
  const product3 = `${baseUrl}${productID3}`;
  const jewellry = [product1, product2, product3]; //array of images

  const [imageUrl, setImageUrl] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //
  const displayImages = (imageArr) => {
    return (
      <div className="furtherCat">
        {imageArr.map((item, index) => (
          <img
            className="eachIm"
            key={index}
            src={item}
            alt={`Product ${index + 1}`}
          /> // Corrected
        ))}
      </div>
    );
  };

  useEffect(() => {
    //
    const imageURLs = async () => {
      const images = [];
      //
      try {
        // const response = await fetch(baseURL);
        for (let i = 0; i < 3; i++) {
          const response = await fetch(jewellry[i]);
          const data = await response.json();
          const image = data.image;
          images.push(image);
        }
        setImageUrl(images);
        //const data = await response.json();
        //setImageUrl(data.image);
        // setImageUrl([...images]);
      } catch (err) {
        setError(err.message);
        // setImageUrl(null);
      } finally {
        setLoading(false);
      }
    };
    imageURLs();
  }, []);
  //
  if (loading) return <p>Loading....</p>;
  if (error) return <p>A network error has occured</p>;
  //
  return <div>{displayImages(imageUrl)}</div>;
  // end
};

export default Image;
