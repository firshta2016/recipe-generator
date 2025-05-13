import React from "react";
import Slider from "react-slick";
import RecipeCard from "./RecipeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeCarousel = ({ recipes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {recipes.map((recipe) => (
        <div key={recipe.recipe_id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </Slider>
  );
};

export default RecipeCarousel;
