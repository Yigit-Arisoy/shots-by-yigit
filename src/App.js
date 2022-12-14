import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CocktailProvider } from "./context/CocktailContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Ingredient from "./pages/Ingredient";
import Cocktail from "./pages/Cocktail";
import SearchResults from "./pages/SearchResults";
import { useContext } from "react";
import CocktailContext from "./context/CocktailContext";

function App() {
  return (
    <div className="App">
      <CocktailProvider>
        <Router>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Search/:name" element={<SearchResults />} />
            <Route path="/Cocktail/:name" element={<Cocktail />} />
            <Route path="/Ingredient/:ing" element={<Ingredient />} />
          </Routes>

          <Footer></Footer>
        </Router>
      </CocktailProvider>
    </div>
  );
}

export default App;
