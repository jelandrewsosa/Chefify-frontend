import FavoriteRecipesCategory from "../FavoriteRecipesCategory";
import FavoriteRecipeUserDetail from "../FavoriteRecipesUserDetail";
import LabelBottomNavigation from "../LabelBottomNavigation";
import TopNavigation from "../TopNavigation";

const categories = [
  {
    type: "mealType",
    label: "All",
    image:
      "https://as1.ftcdn.net/v2/jpg/03/14/99/68/1000_F_314996803_zGSAPzz4a1aXRGETQU4rPEqmgizeOz5D.jpg",
  },
  {
    type: "mealType",
    label: "Breakfast",
    image:
      "https://sunshadowinvest.com/wp-content/uploads/2019/10/web-dimensions-breakfast-article-image-2.png",
  },
  {
    type: "mealType",
    label: "Dinner",
    image: "https://static1.bigstockphoto.com/8/0/4/large1500/408558530.jpg",
  },
  {
    type: "dishType",
    label: "Desserts",
    image:
      "https://thumbs.dreamstime.com/b/various-desserts-berries-cream-dark-background-horizontal-103721928.jpg",
  },
  {
    type: "dishType",
    label: "Drinks",
    image:
      "https://thumbs.dreamstime.com/b/different-alcohol-drinks-set-black-background-39080858.jpg",
  },
  {
    type: "dishType",
    label: "Sides",
    image:
      "https://cdn.create.vista.com/api/media/medium/355453918/stock-photo-top-view-tasty-korean-side?token=",
  },
  {
    type: "dishType",
    label: "Soup",
    image:
      "https://t3.ftcdn.net/jpg/02/49/13/44/360_F_249134444_4LtDWMXa3iEmTvZu7Ua9g3B9TeZRqfak.jpg",
  },
];

export default function FavoriteRecipesView() {

  return (
    <div>
      <TopNavigation />
      <FavoriteRecipeUserDetail />
      {categories.map((category, index) => (
        <FavoriteRecipesCategory
          key={`${category}${index}`}
          categoryName={category.label}
          categoryType={category.type}
          categoryImage={category.image}
        />
      ))}
      <LabelBottomNavigation />
    </div>
  );
}
