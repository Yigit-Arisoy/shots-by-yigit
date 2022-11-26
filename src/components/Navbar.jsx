import React from "react";
import { FaCocktail } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex mt-4 mx-8 items-center justify-between mr-4">
      <div className="flex items-center">
        <FaCocktail className="text-secondary text-4xl mr-4"></FaCocktail>
        <div className="Title flex-initial text-primary-content text-3xl mr-8">
          Shots by Yiğit
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-primary text-xl mx-2">Home</div>
        <div className="text-primary text-xl mx-2">Random Cocktail</div>
        <div className="text-primary text-xl mx-2">btn</div>
      </div>
    </div>
  );
}

export default Navbar;
