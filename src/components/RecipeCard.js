import React, { useState } from "react";
import styled from "styled-components";
import RecipeModal from "./RecipeModal";

const Card = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
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

const RecipeCard = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <h3>{recipe.title}</h3>
      {recipe.image && <RecipeImage src={recipe.image} alt={recipe.title} />}
      <p>{recipe.description}</p>
      <p>
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <p>
        <strong>Cooking Time:</strong> {recipe.cooking_time_minutes} minutes
      </p>
      <p>
        <strong>Serving Size:</strong> {recipe.serving_size} servings
      </p>
      <p>
        <strong>Calories:</strong> {recipe.nutrition.calories} kcal
      </p>
      <p>
        <strong>Protein:</strong> {recipe.nutrition.protein} g
      </p>
      <p>
        <strong>Carbs:</strong> {recipe.nutrition.carbs} g
      </p>
      <p>
        <strong>Fat:</strong> {recipe.nutrition.fat} g
      </p>

      <Button onClick={() => setShowModal(true)}>View Recipe</Button>

      {showModal && (
        <RecipeModal recipe={recipe} closeModal={() => setShowModal(false)} />
      )}
    </Card>
  );
};

export default RecipeCard;
