import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../features/favorites/favoriteSlice";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import style from "./style.module.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RecipeCard({ title, image, recipe }) {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);

  const favoriteData = {
    user: user._id,
    uri: recipe.uri,
    label: recipe.label,
    image: recipe.image,
    dishType: recipe.dishType,
    mealType: recipe.mealType,
    ingredients: recipe.ingredients,
    totalNutrients: recipe.totalNutrients,
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

    dispatch(addToFavorite(favoriteData));
    setOpen(false);
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <Card sx={{ margin: 1, flexGrow: 1 }}>
      <Link to="/recipe" state={{ from: recipe }}>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Recipe Image"
          sx={{ height: 100 }}
        />
      </Link>
      <CardContent
        sx={{
          padding: "16px 16px 0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          className={style.typography}
          sx={{ height: 38, overflow: "hidden", textAlign: "center" }}
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
