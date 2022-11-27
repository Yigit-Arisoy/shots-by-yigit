import React from "react";
import RandomCocktails from "../components/RandomCocktails";

let handleSubmit = (e) => {
  e.preventDefault();
};

function Home() {
  return (
    <div className="text-center">
      <div className="title mt-32">
        <span className="text-primary-focus text-4xl">
          Looking for your next{" "}
          <span className="text-primary underline">drink</span>
          <span className="text-primary">?</span>{" "}
        </span>

        <p className=" text-2xl mt-8">
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
          class="input input-bordered input-primary focus:outline-none rounded-xl mx-2"
        />

        <button class="btn btn-outline rounded-xl text-primary relative">
          Search
        </button>
      </form>
      <RandomCocktails />
    </div>
  );
}

export default Home;
