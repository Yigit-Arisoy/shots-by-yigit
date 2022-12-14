import React from "react";
import Cocktail from "./CocktailItem";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { ImSpinner10 as Spinner } from "react-icons/im";

function CocktailList({ cocktails }) {
  return (
    <div className="">
      <div className="text-center md:text-left random-recipes-container mt-8 mx-8 sm:mx-16 md:mx-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-32 gap-y-8 mt-8">
          {cocktails.map((item, id) => {
            return <Cocktail item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CocktailList;
