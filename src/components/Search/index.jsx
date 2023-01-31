import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";
import axios from "axios";
import style from "./style.module.css";

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getRecipe = async () => {
    if (query) {
      const response = await axios.get(
        `http://localhost:3000/recipes/${query}`
      );
      setRecipes(response.data);
    }
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getRecipe();
  }, [query]);

  return (
    <div >
      <Stack spacing={2} margin={2}>
        <form className={style.form} onSubmit={getSearch}>
          <TextField
            sx={{ minWidth: 340 }}
            className="search-bar"
            label="Search Recipes"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className={style.container}>
          {recipes.map(({ recipe }, index) => (
            <RecipeCard
              key={`recipe${index}`}
              title={recipe.label}
              image={recipe.image}
              recipe={recipe}
            />
          ))}
        </div>
      </Stack>
    </div>
  );
}
