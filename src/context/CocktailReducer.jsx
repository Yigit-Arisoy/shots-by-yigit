const cocktailReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_COCKTAILS":
      return { ...state, cocktails: action.payload, loading: false };

    case "SET_RANDOM_COCKTAILS":
      return { ...state, randomCocktails: action.payload, loading: false };

    case "SET_COCKTAIL":
      return { ...state, cocktail: action.payload, loading: false };

    case "GET_INGREDIENT":
      return { ...state, Ingredient: action.payload, loading: false };

    case "SET_NAV":
      return { ...state, navActive: action.payload };

    default:
      return state;
  }
};

export default cocktailReducer;
