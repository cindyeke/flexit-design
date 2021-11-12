import { useState, useEffect } from "react";
import Card from "../Card/Card";

import "./CardList.scss";

const Cards = ({ keyword }) => {
  const [images, setImages] = useState([]);

  const fetchImage = async () => {
    let url =
      "https://api.unsplash.com/photos?client_id=ppXMm3OjQGmyeYwgAf6bUT9BAq2gCKdOZQR8irqknmQ";
    try {
      const response = await fetch(url);
      const imagesJson = await response.json();
      setImages(imagesJson);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchImageByKeywords = async (keyword) => {
    let url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=ppXMm3OjQGmyeYwgAf6bUT9BAq2gCKdOZQR8irqknmQ`;
    try {
      const response = await fetch(url);
      const imagesJson = await response.json();
      if (imagesJson.results.length) {
        setImages(imagesJson.results);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchImageByKeywords(keyword);
  }, [keyword]);

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <section className="layout__cards cards">
      {images &&
        images.map((image, index) => <Card key={index} image={image} />)}
    </section>
  );
};

export default Cards;
