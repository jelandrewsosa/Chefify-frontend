import { useLocation } from "react-router-dom";
import LabelBottomNavigation from "../LabelBottomNavigation";
import RecipeDetailsViewTable from "../RecipeDetailsViewTable";
import RecipeDetailsViewTopNav from "../RecipeDetailsViewTopNav";

export default function FeaturedRecipeCardDetails() {
  const featuredRecipe = useLocation().state.from;
  const nutrients = Object.entries(featuredRecipe.recipe.totalNutrients);

  console.log(featuredRecipe)

  return (
    <div>
      <RecipeDetailsViewTopNav title={featuredRecipe.recipe.label} />
      <RecipeDetailsViewTable
        ingredients={featuredRecipe.recipe.ingredients}
        nutritions={nutrients}
        image={featuredRecipe.recipe.image}
        source={featuredRecipe.recipe.source}
        recipeTitle={featuredRecipe.recipe.label}
        dishType={featuredRecipe.recipe.dishType[0]}
      />
      <LabelBottomNavigation />
    </div>
  );
}