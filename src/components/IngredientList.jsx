import React from "react";
import { Link } from "react-router-dom";

function IngredientList({ cocktail }) {
  return (
    <div>
      <ul className="list-disc ml-4">
        {cocktail.strMeasure1 ? (
          <li>
            {cocktail.strMeasure1}
            <Link
              to={`/Ingredient/${cocktail.strIngredient1}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient1}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure2 ? (
          <li>
            {cocktail.strMeasure2}
            <Link
              to={`/Ingredient/${cocktail.strIngredient2}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient2}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure3 ? (
          <li>
            {cocktail.strMeasure3}
            <Link
              to={`/Ingredient/${cocktail.strIngredient3}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient3}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure4 ? (
          <li>
            {cocktail.strMeasure4}
            <Link
              to={`/Ingredient/${cocktail.strIngredient4}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient4}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure5 ? (
          <li>
            {cocktail.strMeasure5}
            <Link
              to={`/Ingredient/${cocktail.strIngredient5}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient5}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure6 ? (
          <li>
            {cocktail.strMeasure6}
            <Link
              to={`/Ingredient/${cocktail.strIngredient6}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient6}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure7 ? (
          <li>
            {cocktail.strMeasure7}
            <Link
              to={`/Ingredient/${cocktail.strIngredient7}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient7}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure8 ? (
          <li>
            {cocktail.strMeasure8}
            <Link
              to={`/Ingredient/${cocktail.strIngredient8}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient8}
            </Link>
          </li>
        ) : (
          <></>
        )}

        {cocktail.strMeasure9 ? (
          <li>
            {cocktail.strMeasure9}
            <Link
              to={`/Ingredient/${cocktail.strIngredient9}`}
              className="text-primary-focus"
            >
              {cocktail.strIngredient9}
            </Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default IngredientList;
