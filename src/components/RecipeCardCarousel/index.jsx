import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeCard from "../RecipeCard";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RecipeCardCarousel({ title }) {
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async () => {
    const response = await axios.get(`http://localhost:3000/recipes/${title}`);
    setRecipes(response.data);
  };

  useEffect(() => {
    getRecipe();
  }, [title]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
    },
  };

  return (
    <div className={style.container}>
      <Carousel responsive={responsive}>
        {recipes.map(({ recipe }, index) => (
          <RecipeCard
            key={`${recipe}${index}`}
            title={recipe.label}
            image={recipe.image}
            recipe={recipe}
          />
        ))}
      </Carousel>
    </div>
  );
}
