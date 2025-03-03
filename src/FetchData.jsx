import { useState, useEffect } from "react";
import React from "react";
import "./style.css";
import JewellryValues from "./jewellryCategory/JewellryCode";
import PropTypes from "prop-types"; // Import PropTypes

const [productA, productB, productC] = JewellryValues();

console.log("Product A, B, C URLs:", productA, productB, productC);

const Image = ({ productA, productB, productC }) => {
  const items = [productA, productB, productC]; //array of images

  const [imageUrl, setImageUrl] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState([]);
  //
  const displayImages = (imageArr) => {
    return (
      <div className="furtherCat">
        {imageArr.map((item, index) => (
          <div key={index}>
            <img className="eachIm" src={item} alt={`Product ${index + 1}`} />
            {displayDescription(description[index])}
          </div>
        ))}
      </div>
    );
  };
  const displayDescription = (descriptionText) => {
    return (
      <div className="itemDesc">
        <p>{descriptionText}</p>
      </div>
    );
  };

  useEffect(() => {
    //
    const imageURLs = async () => {
      const images = [];
      const descriptions = [];
      //
      try {
        // const response = await fetch(baseURL);
        for (let i = 0; i < 3; i++) {
          const response = await fetch(items[i]);
          if (!response.ok) throw new Error("Failed to fetch data");
          //
          const data = await response.json();
          if (!data.image || !data.description)
            throw new Error("Invalid product data received");
          //
          const image = data.image;
          const itemDescription = data.description;
          images.push(image);
          descriptions.push(itemDescription);
        }
        setImageUrl(images);
        setDescription(descriptions);
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
  if (error) return <p>A network error has occured: {error}</p>;
  //
  return <div>{displayImages(imageUrl)}</div>;
};

Image.propTypes = {
  productA: PropTypes.string.isRequired, // productA should be a string and is required
  productB: PropTypes.string.isRequired, // productB should be a string and is required
  productC: PropTypes.string.isRequired, // productC should be a string and is required
};

export default Image;
