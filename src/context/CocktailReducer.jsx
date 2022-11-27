const cocktailReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_COCKTAILS":
      return { ...state, cocktails: action.payload, loading: false };

    case "GET_INGREDIENT":
      return { ...state, Ingredient: action.payload, loading: false };

    default:
      return state;
  }
};

export default cocktailReducer;
