import React from "react";
import CocktailList from "../components/CocktailList";
import { useContext, useEffect } from "react";
import CocktailContext from "../context/CocktailContext";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { loading, fetchByName, cocktails } = useContext(CocktailContext);
  const params = useParams();

  useEffect(() => {
    fetchByName(params.name);
  }, []);

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
        <p className="mt-16 text-neutral-content text-xl sm:text-2xl mx-4 sm:mx-32 text-left ">
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
