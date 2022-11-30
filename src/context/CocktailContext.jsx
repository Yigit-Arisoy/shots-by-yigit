import { createContext, useReducer } from "react";
import cocktailReducer from "./CocktailReducer";
import { useState } from "react";

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const initialStates = {
    loading: false,
    cocktails: [],
    randomCocktails: [],
    Ingredient: "",
    cocktail: "",
    navActive: false,
  };

  const [state, dispatch] = useReducer(cocktailReducer, initialStates);

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const setCocktail = (cocktail) => {
    dispatch({ type: "SET_COCKTAIL", payload: cocktail });
  };

  const setNavActive = (value) => {
    dispatch({ type: "SET_NAV", payload: value });
  };

  const fetchRandomCocktail = async () => {
    setLoading();
    let cocktailCount = 12;
    let cocktailsList = new Array(cocktailCount);
    for (let i = 0; i < cocktailCount; i++) {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      cocktailsList[i] = data.drinks[0];
    }

    dispatch({
      type: "SET_RANDOM_COCKTAILS",
      payload: cocktailsList,
    });
  };

  const fetchbyId = async (id) => {
    setLoading();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007${id}`
    );
    const data = await response.json();

    return data.drinks[0];
  };

  const fetchByName = async (name) => {
    setLoading();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();

    dispatch({
      type: "SET_COCKTAILS",
      payload: data.drinks,
    });
  };

  const fetchByNameSingle = async (name) => {
    setLoading();

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();

    dispatch({
      type: "SET_COCKTAIL",
      payload: data.drinks[0],
    });
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

  const changeMode = () => {
    if (document.documentElement.getAttribute("data-theme") == "night") {
      document.documentElement.setAttribute("data-theme", "cupcake");
    } else {
      document.documentElement.setAttribute("data-theme", "night");
    }

    dispatch({
      type: "CHANGE_MODE",
      payload: document.documentElement.getAttribute("data-theme"),
    });
  };

  return (
    <CocktailContext.Provider
      value={{
        loading: state.loading,
        cocktails: state.cocktails,
        Ingredient: state.Ingredient,
        cocktail: state.cocktail,
        randomCocktails: state.randomCocktails,
        navActive: state.navActive,
        fetchRandomCocktail,
        IngredientFetcher,
        fetchByIngredient,
        fetchByName,
        fetchByNameSingle,
        changeMode,
        setNavActive,
        setCocktail,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;
