import FavoriteRecipeCategoryDetailsCard from "../FavoriteRecipesCategoryDetailsCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserFavoriteRecipes,
  reset,
} from "../../features/favorites/favoriteSlice";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import style from "./style.module.css"
import LabelBottomNavigation from "../LabelBottomNavigation";

export default function FavoriteRecipeCategoryDetails() {

  const categoryName = useLocation().state.from;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { favorites } = useSelector((state) => state.favorites);

  const getUserFavoritesData = async () => {
    dispatch(getAllUserFavoriteRecipes(user._id));

    return () => {
      dispatch(reset);
    };
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getUserFavoritesData();
  }, []);

  return (
    <div className={style.container}>
      <KeyboardBackspaceIcon className={style.backButton} onClick={goBack}/>
      <h3>{categoryName}</h3>
      {favorites
        .filter((recipe) => {
          if (
            categoryName === "Breakfast" &&
            recipe.mealType[0] === "breakfast"
          ) {
            return true;
          } else if (
            categoryName === "Dinner" &&
            recipe.mealType[0] === "lunch/dinner"
          ) {
            return true;
          } else if (
            categoryName === "Desserts" &&
            recipe.dishType[0] === "desserts"
          ) {
            return true;
          } else if (
            categoryName === "Drinks" &&
            recipe.dishType[0] === "drinks"
          ) {
            return true;
          } else if (
            categoryName === "Sides" &&
            recipe.dishType[0] === "starter"
          ) {
            return true;
          } else if (categoryName === "Soup" && recipe.dishType[0] === "soup") {
            return true;
          } else if (categoryName === "All") {
            return true;
          }
        })
        .map((favorite, index) => (
          <FavoriteRecipeCategoryDetailsCard
            key={`${favorite}${index}${favorite.label}`}
            dishType={favorite.dishType}
            image={favorite.image}
            ingredients={favorite.ingredients}
            label={favorite.label}
            mealType={favorite.mealType}
            totalNutrients={favorite.totalNutrients}
            uri={favorite.uri}
            id={favorite._id}
            favorite={favorite}
          />
        ))}
        <LabelBottomNavigation />
    </div>
  );
}
