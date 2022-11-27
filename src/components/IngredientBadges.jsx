import React from "react";
import IngredientBadge from "./IngredientBadge";

function IngredientBadges({ item }) {
  return (
    <div className="flex flex-wrap mx-4 mt-3 mb-2 gap-2">
      <IngredientBadge Ingredient={item.strIngredient1} />
      <IngredientBadge Ingredient={item.strIngredient2} />
      <IngredientBadge Ingredient={item.strIngredient3} />
      <IngredientBadge Ingredient={item.strIngredient4} />
    </div>
  );
}

export default IngredientBadges;
