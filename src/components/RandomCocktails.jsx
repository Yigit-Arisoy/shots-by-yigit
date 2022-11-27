import React from "react";
import { useEffect } from "react";
import Cocktail from "./CocktailItem";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { ImSpinner10 as Spinner } from "react-icons/im";
import CocktailList from "./CocktailList";

function RandomCocktails() {
  let { loading, fetchRandomCocktail, cocktails } = useContext(CocktailContext);

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (loading)
    return <Spinner className="spinner mx-auto text-6xl text-primary mt-16" />;

  if (true)
    return (
      <div>
        <h3 className="text-primary-focus text-2xl underline mt-16">
          Some Random Recipes to Get You Started
        </h3>
        <CocktailList cocktails={cocktails} />
      </div>
    );
}

export default RandomCocktails;
