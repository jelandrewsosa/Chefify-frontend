import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

export default function RecipeDetailsViewTopNav({ title }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", zIndex: 100 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "#f3b129", position: "fixed", top: 0 }}
      >
        <Toolbar>
          <KeyboardBackspaceIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={goBack}
          />
          <Typography
            sx={{
              flexGrow: 1,
              overflow: "hidden",
              margin: "5px 20px",
              maxHeight: 52,
            }}
          >
            <span>{title}</span>
          </Typography>
          <CardActions disableSpacing>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
