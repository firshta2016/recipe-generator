import React, { useState } from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeSearch = ({ recipes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const ingredients = searchQuery
      .toLowerCase()
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    if (ingredients.length === 0) {
      setFilteredRecipes(recipes);
      return;
    }

    const filtered = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredients.some((query) =>
          ingredient.name.toLowerCase().includes(query)
        )
      )
    );

    setFilteredRecipes(filtered);
  };

  return (
    <Container>
      <h1>Recipe App</h1>
      <SearchBox>
        <Input
          type="text"
          placeholder="Enter ingredients (e.g. chicken, tomato)"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchBox>

      <RecipeList>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.recipe_id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </RecipeList>
    </Container>
  );
};

export default RecipeSearch;
