import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { useEffect } from "react";
import { ImSpinner10 as Spinner } from "react-icons/im";
import CocktailList from "../components/CocktailList";

function Ingredient() {
  let { loading, Ingredient, cocktails, IngredientFetcher, fetchByIngredient } =
    useContext(CocktailContext);
  const params = useParams();

  useEffect(() => {
    IngredientFetcher(params.ing);
    fetchByIngredient(params.ing);
  }, []);

  if (loading)
    return <Spinner className="spinner mx-auto text-6xl text-primary" />;

  return (
    <div>
      <div className="mt-16 text-center mx-auto md:text-left md:ml-16 mr-60 card shadow shadow-primary px-4 pb-4 pt-4">
        <p className="text-primary text-4xl mb-8 ">
          {Ingredient.strIngredient}
        </p>

        <div className="flex gap-8 mb-8">
          <p className="text-secondary text-xl  shadow shadow-primary rounded-xl px-4 pb-1 pt-1">
            Type: <span className="text-primary">{Ingredient.strType}</span>
          </p>

          <p className="text-secondary text-xl  shadow shadow-primary rounded-xl px-4 pb-1 pt-1">
            Contains Alcohol:{" "}
            <span className="text-primary">{Ingredient.strAlcohol}</span>
          </p>

          {Ingredient.strAlcohol == "Yes" ? (
            <div className="text-secondary text-xl  shadow shadow-primary rounded-xl px-4 pb-1 pt-1">
              Alcohol by Volume:{" "}
              <span className="text-primary">{Ingredient.strABV}%</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <p className="text-primary-focus">{Ingredient.strDescription}</p>
      </div>

      <div className="mt-16 text-center mx-auto md:text-left md:ml-16 mr-60 px-4 pb-4 pt-4">
        {" "}
        <p className="text-secondary text-3xl mb-8 underline">
          Some Recipes Featuring{" "}
          <span className="text-primary">{Ingredient.strIngredient}</span>
        </p>
        <CocktailList cocktails={cocktails}></CocktailList>
      </div>
    </div>
  );
}

export default Ingredient;
