import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import FeaturedRecipeCard from "../FeaturedRecipesCard";
import style from "./style.module.css";
import axios from "axios";

export default function SimpleCollapse({ title }) {
  const [checked, setChecked] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const getRecipe = async () => {
    const response = await axios.get(`http://localhost:3000/recipes/${title}`);
    setRecipes(response.data);
  };

  useEffect(() => {
    getRecipe();
  }, [title]);

  return (
    <div>
      <FormControlLabel
        sx={{ marginLeft: 1 }}
        control={
          <Switch
            className={style.switchButton}
            checked={checked}
            onChange={handleChange}
          />
        }
        label="Featured Recipes"
      />
      {checked ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {recipes.length >= 5 ? (
            <Box
              sx={{
                "& > :not(style)": {
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 10px",
                },
              }}
            >
              <div>
                <Collapse in={checked}>
                  <FeaturedRecipeCard
                    title={recipes[5].recipe.label}
                    image={recipes[5].recipe.image}
                    featuredRecipe={recipes[5]}
                  />
                </Collapse>
                <Collapse in={checked}>
                  <FeaturedRecipeCard
                    title={recipes[1].recipe.label}
                    image={recipes[1].recipe.image}
                    featuredRecipe={recipes[1]}
                  />
                </Collapse>
                <Collapse in={checked}>
                  <FeaturedRecipeCard
                    title={recipes[2].recipe.label}
                    image={recipes[2].recipe.image}
                    featuredRecipe={recipes[2]}
                  />
                </Collapse>
              </div>
              <div>
                <Box>
                  <Collapse orientation="horizontal" in={checked}>
                    <FeaturedRecipeCard
                      title={recipes[3].recipe.label}
                      image={recipes[3].recipe.image}
                      featuredRecipe={recipes[3]}
                    />
                  </Collapse>
                </Box>
                <Box>
                  <Collapse orientation="horizontal" in={checked}>
                    <FeaturedRecipeCard
                      title={recipes[4].recipe.label}
                      image={recipes[4].recipe.image}
                      featuredRecipe={recipes[4]}
                    />
                  </Collapse>
                </Box>
              </div>
            </Box>
          ) : (
            ""
          )}
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
