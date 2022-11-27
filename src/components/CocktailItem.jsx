import React from "react";
import IngredientBadges from "./IngredientBadges";
import { Link } from "react-router-dom";

function Cocktail({ item }) {
  return (
    <div className="card shadow shadow-primary text-center h-56">
      <Link to={`/Cocktail/${item.strDrink}`}>
        <img
          src={item.strDrinkThumb}
          alt=""
          className="card w-32 mx-auto mt-2 shadow-md shadow-black"
        />
      </Link>

      <Link to={`/Cocktail/${item.strDrink}`}>
        <p className="text-primary mt-1 hover:text-primary-focus">
          {item.strDrink}
        </p>
      </Link>
      <div className="mx-4">
        <IngredientBadges item={item}></IngredientBadges>
      </div>
    </div>
  );
}

export default Cocktail;
