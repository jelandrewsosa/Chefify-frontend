import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function FavoriteRecipesCategory({
  categoryName,
  categoryImage,
}) {
  
  return (
    <div>
      <Card
        sx={{
          flexGrow: 1,
          height: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "unset",
        }}
      >
        <Link to="/favorite/category" state={{ from: categoryName }}>
          <CardMedia
            component="img"
            height="194"
            image={categoryImage}
            alt="Recipe Image"
            sx={{ height: 180, opacity: 0.95 }}
          />
        </Link>
        <h1 sx={{ opacity: 1, color: "black" }} className={style.header}>
          {categoryName}
        </h1>
      </Card>
    </div>
  );
}
