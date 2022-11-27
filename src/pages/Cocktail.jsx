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
    <div className="ml-16 mt-16 grid grid-cols-1 md:grid-cols-5 md:justify-items-start">
      <div className="w-64">
        <img
          src={cocktail.strDrinkThumb}
          alt=""
          className="card w-60 mt-2 shadow-md shadow-black"
        />

        <IngredientBadges item={cocktail}></IngredientBadges>
      </div>

      <div className="col-span-3 text-left">
        <h1 className="text-primary text-4xl mb-4">{cocktail.strDrink}</h1>
        <p className="">{cocktail.strInstructions}</p>

        <div className="mt-8">
          <IngredientList cocktail={cocktail} />
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
