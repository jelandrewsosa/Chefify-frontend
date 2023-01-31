import { useState, useEffect } from "react";
import style from "./style.module.css";
import axios from "axios";
import RecipeCard from "../RecipeCard";

export default function RecentRecipesList({ title }) {
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async () => {
    const response = await axios.get(`http://localhost:3000/recipes/${title}`);
    setRecipes(response.data);
  };

  useEffect(() => {
    getRecipe();
  }, [title]);

  return (
    <div>
      <div className={style.container}>
        {recipes.map(({ recipe }, index) => (
          <RecipeCard
            key={`${recipe}${index}`}
            title={recipe.label}
            image={recipe.image}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}
