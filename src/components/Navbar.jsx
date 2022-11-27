import React from "react";
import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const { changeMode, navActive, setNavActive } = useContext(CocktailContext);
  const handleTheme = (e) => {
    changeMode();
  };
  const handleMenuClick = () => {
    setNavActive(true);
  };
  return (
    <div>
      <MobileNavbar></MobileNavbar>
      <div className="flex mt-4 mx-8 items-center justify-between mr-4">
        <div className="flex items-center">
          <Link to={"/"}>
            <FaCocktail className="text-secondary text-4xl mr-4"></FaCocktail>
          </Link>
          <Link to={"/"}>
            <div className="Title flex-initial text-primary text-3xl mr-8">
              Shots by Yiğit
            </div>
          </Link>
        </div>

        <div className="flex sm:hidden sm:align-middle">
          <button onClick={handleMenuClick}>
            <FiMenu className="text-primary-focus text-3xl" />
          </button>
        </div>

        <div className="hidden sm:flex sm:items-center">
          <div className="text-primary text-xl mx-2">Home</div>
          <div className="text-primary text-xl mx-2">Random Cocktail</div>
          <button className="text-primary text-xl mx-2" onClick={handleTheme}>
            btn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
