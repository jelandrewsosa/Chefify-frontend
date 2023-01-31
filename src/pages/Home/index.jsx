import FeaturedRecipes from "../../components/FeaturedRecipes";
import LabelBottomNavigation from "../../components/LabelBottomNavigation";
import RecentRecipesList from "../../components/RecentRecipesList";
import RecipeCardCarousel from "../../components/RecipeCardCarousel";
import Search from "../../components/Search";
import TopNavigation from "../../components/TopNavigation";
import style from './style.module.css';

export default function Home() {
  
  return (
    <div className={style.container}>
      <TopNavigation />
      <Search />
      <FeaturedRecipes title={'steak'} className={style.steak}/>
      <div>
        <h4>Trending</h4>
        <RecipeCardCarousel title={'trending'} className={style.trending}/>
      </div>
      <div>
        <h4>Popular</h4>
        <RecipeCardCarousel title={'popular'} className={style.popular}/>
      </div>
      <div>
        <h4>Dessert</h4>
        <RecipeCardCarousel title={'desert'} className={style.dessert}/>
      </div>
      <div>
        <h4>Healthy</h4>
        <RecipeCardCarousel title={'healthy'} className={style.healthy}/>
      </div>
      <div>
        <h4>Recent</h4>
        <RecentRecipesList />
      </div>
      <LabelBottomNavigation />
    </div>
  );
}

