import React from "react";
import { Link } from "react-router-dom";

function IngredientBadge({ Ingredient }) {
  if (Ingredient) {
    return (
      <div className="flex-initial ingredient text-xs card shadow-sm shadow-primary content-center whitespace-nowrap ">
        <div className="px-2">
          <Link className="hover:text-primary" to={`/Ingredient/${Ingredient}`}>
            {Ingredient}
          </Link>{" "}
        </div>
      </div>
    );
  }
}

export default IngredientBadge;
