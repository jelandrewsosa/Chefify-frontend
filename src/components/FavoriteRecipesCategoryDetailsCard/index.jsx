import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { deleteFromFavorites } from "../../features/favorites/favoriteSlice";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FavoriteRecipeCategoryDetailsCard({
  label,
  image,
  id,
  favorite,
}) {

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card sx={{ margin: 1, flexGrow: 1 }}>
        <Link to="/favorite/recipe" state={{ from: favorite }}>
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
            <span>{label}</span>
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
            <BookmarkRemoveIcon sx={{ position: "relative" }} />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Remove Recipe?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you want to remove this recipe from your Favorite Recipes?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={() => dispatch(deleteFromFavorites(id), setOpen(false))} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>

      </Card>
    </div>
  );
}
