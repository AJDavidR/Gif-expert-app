import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
      {images.map((img) => (
        <li key={img.id}>
          <h4>{img.title}</h4>
          <img
            src={img.url}
            alt={img.title}
          ></img>
        </li>
      ))}
      </ol>
    </>
  );
};
