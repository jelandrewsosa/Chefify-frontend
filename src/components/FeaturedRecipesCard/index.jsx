import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../features/favorites/favoriteSlice";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";

export default function FeaturedRecipeCard({ image, title, featuredRecipe }) {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);

  const featuredRecipeData = {
    user: user._id,
    uri: featuredRecipe.recipe.uri,
    label: featuredRecipe.recipe.label,
    image: featuredRecipe.recipe.image,
    dishType: featuredRecipe.recipe.dishType,
    mealType: featuredRecipe.recipe.mealType,
    ingredients: featuredRecipe.recipe.ingredients,
    totalNutrients: featuredRecipe.recipe.totalNutrients,
  };

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToFavorite = async (e) => {
    e.preventDefault();

    dispatch(addToFavorite(featuredRecipeData));
    setOpen(false);
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <Link to="/featured/recipe" state={{ from: featuredRecipe }}>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Recipe Image"
          sx={{ minHeight: "10vh", minWidth: "12vh" }}
        />
      </Link>
      <CardContent
        sx={{ height: 25, overflow: "hidden", padding: "16px 16px 13px 16px" }}
      >
        <Typography
          sx={{ padding: 0, marginBottom: 0, textAlign: "center" }}
          variant="body2"
          color="text.secondary"
        >
          <span>{title}</span>
        </Typography>
      </CardContent>

        <div>
          <IconButton
            onClick={handleClickOpen}
            sx={{
              position: "relative",
              bottom: 90,
              right: -5,
              zIndex: 1000,
              height: 30,
              width: 30,
              bgcolor: "whitesmoke",
              borderRadius: "50%",
            }}
            aria-label="add to favorites"
          >
            <BookmarkAddIcon sx={{ position: "relative" }} />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleAddToFavorite} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>

    </Card>
  );
}
