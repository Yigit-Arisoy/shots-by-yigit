import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { useEffect } from "react";
import { ImSpinner10 as Spinner } from "react-icons/im";
import IngredientBadges from "../components/IngredientBadges";
import IngredientList from "../components/IngredientList";

function Cocktail() {
  const { loading, fetchByName, cocktail } = useContext(CocktailContext);
  const params = useParams();

  useEffect(() => {
    fetchByName(params.name);
  }, []);

  console.log(params.name);
  if (loading)
    return <Spinner className="spinner mx-auto text-6xl text-primary mt-16" />;

  return (
    <div className="mx-auto sm:ml-16 mt-16 grid grid-cols-1 sm:grid-cols-5 justify-items-center sm:justify-items-start">
      <div className="mx-4 sm:mx-0">
        <img
          src={cocktail.strDrinkThumb}
          alt=""
          className="card w-60 mt-2 shadow-md shadow-black mx-auto sm:mx-0"
        />

        <IngredientBadges item={cocktail}></IngredientBadges>
      </div>

      <div className="col-span-3 text-left mx-4">
        <h1 className="text-primary text-4xl mb-4 text-center sm:text-left">
          {cocktail.strDrink}
        </h1>
        <p className="">{cocktail.strInstructions}</p>

        <div className="mt-8">
          <IngredientList cocktail={cocktail} />
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
