import React from "react";
import RandomCocktails from "../components/RandomCocktails";

let handleSubmit = (e) => {
  e.preventDefault();
};

function Home() {
  return (
    <div className="text-center mx-0 sm:mx-0">
      <div className="title mt-32 mx-4 sm:mx-0">
        <span className="text-primary-focus  text-2xl sm:text-4xl">
          Looking for your next{" "}
          <span className="text-primary underline">drink</span>
          <span className="text-primary">?</span>{" "}
        </span>

        <p className=" text-xl sm:text-2xl mt-8">
          Browse through thousands of cocktail recipes.
        </p>
      </div>
      <form
        action=""
        className="searchArea mt-8 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Cocktails"
          class="input input-bordered input-primary focus:outline-none rounded-xl mx-1 w-48 sm:w-64 sm:mx-2"
        />

        <button class="btn btn-outline rounded-xl text-primary relative">
          Search
        </button>
      </form>
      <div className="mx-4 sm:mx-0">
        <RandomCocktails />
      </div>
    </div>
  );
}

export default Home;
