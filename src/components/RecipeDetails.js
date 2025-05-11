// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const RecipeDetail = () => {
//   const { id } = useParams(); // Get the recipe ID from the URL
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     // Fetch the data (you might replace this with an API call)
//     fetch("/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const recipeData = data.recipes.find(
//           (r) => r.recipe_id === parseInt(id)
//         );
//         setRecipe(recipeData);
//       });
//   }, [id]);

//   if (!recipe) return <div>Loading...</div>;

//   return (
//     <div className="recipe-detail">
//       <h2>{recipe.title}</h2>
//       <p>
//         <strong>Description:</strong> {recipe.description}
//       </p>
//       <p>
//         <strong>Cuisine:</strong> {recipe.cuisine}
//       </p>
//       <p>
//         <strong>Difficulty:</strong> {recipe.difficulty}
//       </p>
//       <p>
//         <strong>Cooking Time:</strong> {recipe.cooking_time_minutes} minutes
//       </p>
//       <p>
//         <strong>Serving Size:</strong> {recipe.serving_size} servings
//       </p>

//       <h3>Ingredients</h3>
//       <ul>
//         {recipe.ingredients.map((ingredient, idx) => (
//           <li key={idx}>
//             {ingredient.quantity} {ingredient.unit} of {ingredient.name}
//           </li>
//         ))}
//       </ul>

//       <h3>Steps</h3>
//       <ol>
//         {recipe.steps.map((step, idx) => (
//           <li key={idx}>{step.instruction}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default RecipeDetail;
