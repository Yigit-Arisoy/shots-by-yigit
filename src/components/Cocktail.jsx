import React from "react";
import IngredientBadges from "./IngredientBadges";

function Cocktail({ item }) {
  return (
    <div className="card shadow shadow-primary text-center h-56">
      <img
        src={item.strDrinkThumb}
        alt="the picture will arrive shortly..."
        className="card w-32 mx-auto mt-2 shadow-md shadow-black"
      />
      <p className="text-primary mt-1">{item.strDrink}</p>

      <IngredientBadges item={item}></IngredientBadges>
    </div>
  );
}

export default Cocktail;
