import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import style from "./style.module.css";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import RecipeCardCarousel from "../RecipeCardCarousel";
import { useEffect } from "react";

export default function RecipeDetailsViewTable({
  ingredients,
  nutritions,
  image,
  source,
  recipeTitle,
  dishType,
}) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ingredients]);

  return (
    <div>
      <CardMedia sx={{marginBottom: 1}} component="img" height="194" image={image} alt="dish" />
      <h3>{recipeTitle}</h3>
      { source ? <h5>Presented by {source}</h5> : '' }
      <TableContainer component={Paper}>
        <h4>
          Ingredients for <br></br> {count} servings
        </h4>
        <span className={style.counter}>
          <RemoveIcon
            sx={{ marginRight: 1.5, color: "#f3b129" }}
            onClick={decrement}
          />{" "}
          <span className={style.count}> {count} </span>{" "}
          <AddIcon
            sx={{ marginLeft: 1.5, color: "#f3b129" }}
            onClick={increment}
          />{" "}
        </span>

        <Table aria-label="simple table">
          <TableBody>
            {ingredients.map((ingredient) => (
              <TableRow
                key={ingredient.text}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ingredient.text}
                </TableCell>
                <TableCell align="right">
                  {ingredient.quantity * count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <h4>Related Recipes</h4>
          <RecipeCardCarousel title={dishType} />
        </div>
        <div>
          <h4>Nutritions</h4>
          <Table aria-label="simple table">
            <TableBody>
              {nutritions.map((nutrition, index) => (
                <TableRow
                  key={`${nutrition[1]}${index}${nutrition[1].quantity}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {nutrition[1].label}
                  </TableCell>
                  <TableCell align="right" >
                    {Math.ceil(nutrition[1].quantity)}
                    {nutrition[1].unit}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
