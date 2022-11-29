import React from "react";
import CocktailList from "../components/CocktailList";

function SearchResults({ cocktails }) {
  if (cocktails === undefined) {
    <div></div>;
  } else if (cocktails == null) {
    <div>
      <p className="text-primary-focus text-xl sm:text-2xl mt-8">
        There doesn't seem to be anything like that...
      </p>
    </div>;
  } else if (cocktails.length != 0) {
    return (
      <div>
        <p className="mt-16 text-neutral-content text-2xl mx-32 text-left ">
          We have found{" "}
          <span className="text-primary">{cocktails.length} </span> matches for
          your search:
        </p>

        <CocktailList cocktails={cocktails} />

        <p className="mt-4 mb-32 text-neutral-content text-xl">
          {" "}
          <span className="text-primary">Tip:</span> You can also try to search
          for a particular ingredient. (well, when I implement it)
        </p>
      </div>
    );
  }
}

export default SearchResults;
