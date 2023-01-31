import { useLocation } from "react-router-dom";
import LabelBottomNavigation from "../LabelBottomNavigation";
import RecipeDetailsViewTable from "../RecipeDetailsViewTable";
import RecipeDetailsViewTopNav from "../RecipeDetailsViewTopNav";

export default function RecipeDetailsView() {
  const recipe = useLocation().state.from;
  const nutrients = Object.entries(recipe.totalNutrients);

  return (
    <div>
      <RecipeDetailsViewTopNav title={recipe.label} />
      <RecipeDetailsViewTable
        ingredients={recipe.ingredients}
        nutritions={nutrients}
        image={recipe.image}
        source={recipe.source}
        recipeTitle={recipe.label}
        dishType={recipe.dishType[0]}
      />
      <LabelBottomNavigation />
    </div>
  );
}
