import { createContext, useReducer } from "react";
import cocktailReducer from "./CocktailReducer";
import { useState } from "react";

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const initialStates = {
    loading: false,
    cocktails: [],
    Ingredient: "",
  };

  const [state, dispatch] = useReducer(cocktailReducer, initialStates);

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const fetchRandomCocktail = async () => {
    setLoading();
    let cocktailCount = 12;
    let cocktailsList = new Array(cocktailCount);
    for (let i = 0; i < cocktailCount; i++) {
      const response = await fetch(
        "https:/www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      cocktailsList[i] = data.drinks[0];
    }

    dispatch({
      type: "SET_COCKTAILS",
      payload: cocktailsList,
    });
  };

  const fetchbyId = async (id) => {
    setLoading();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007${id}`
    );

    const data = await response.json();

    console.log(data.drinks[0]);

    return data.drinks[0];
  };

  const IngredientFetcher = async (ing) => {
    setLoading();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ing}`
    );

    const data = await response.json();

    dispatch({
      type: "GET_INGREDIENT",
      payload: data.ingredients[0],
    });
  };

  const fetchByIngredient = async (ing) => {
    setLoading();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ing}`
    );
    const data = await response.json();

    dispatch({
      type: "SET_COCKTAILS",
      payload: data.drinks,
    });
  };

  return (
    <CocktailContext.Provider
      value={{
        loading: state.loading,
        cocktails: state.cocktails,
        Ingredient: state.Ingredient,
        fetchRandomCocktail,
        IngredientFetcher,
        fetchByIngredient,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;
