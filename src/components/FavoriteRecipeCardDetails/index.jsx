import { useLocation } from "react-router-dom";
import LabelBottomNavigation from "../LabelBottomNavigation";
import RecipeDetailsViewTable from "../RecipeDetailsViewTable";
import RecipeDetailsViewTopNav from "../RecipeDetailsViewTopNav";

export default function FavoriteRecipeCardDetails() {
  const favorite = useLocation().state.from;
  const nutrients = Object.entries(favorite.totalNutrients);

  return (
    <div>
      <RecipeDetailsViewTopNav title={favorite.label} />
      <RecipeDetailsViewTable
        ingredients={favorite.ingredients}
        nutritions={nutrients}
        image={favorite.image}
        source={favorite.source}
        recipeTitle={favorite.label}
        dishType={favorite.dishType[0]}
      />
      <LabelBottomNavigation />
    </div>
  );
}