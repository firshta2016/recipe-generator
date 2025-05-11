import React, { useState, useEffect } from "react";
import RecipeSearch from "./RecipeSearch";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className="recipe-list">
      <RecipeSearch recipes={recipes} />
    </div>
  );
};

export default RecipeList;
