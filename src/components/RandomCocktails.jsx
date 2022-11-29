import React from "react";
import { useEffect } from "react";
import Cocktail from "./CocktailItem";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { ImSpinner10 as Spinner } from "react-icons/im";
import RandomCocktailList from "./RandomCocktailList";

function RandomCocktails() {
  let { loading, fetchRandomCocktail, randomCocktails } =
    useContext(CocktailContext);

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (loading)
    return <Spinner className="spinner mx-auto text-6xl text-primary mt-16" />;

  if (true)
    return (
      <div>
        <h3 className="text-primary-focus text-2xl underline mt-16">
          Some Random Recipes
        </h3>

        <RandomCocktailList randomCocktails={randomCocktails} />
      </div>
    );
}

export default RandomCocktails;
