import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon Ball Z"]);

  const onAddCategory = () => {
    setCategories(["Valorant", ...categories]);
  };
  console.log(categories);
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <input id="r" type="text" /> */}
      <button onClick={onAddCategory}>Agregar</button>
      {/* Listado */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li>ABC</li> */}
      </ol>

      {/* Gif Item */}
    </>
  );
};
