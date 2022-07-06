import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FeaturedImages.css";

const FeaturedImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const list = await fetch(`https://picsum.photos/v2/list`);
      const imagesList = await list.json();

      if (!list.ok) {
        throw new Error("Something went wrong!");
      }

      console.log(imagesList);

      setImages(imagesList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="item-container">
        {images.map((image) => (
          <div id="divCardId" className="card" key={image.id}>
            <img id="singleImageId" src={image.download_url} alt="icons" />

            <p>{image.author}</p>
            <Link to={`/image/${image.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedImages;
