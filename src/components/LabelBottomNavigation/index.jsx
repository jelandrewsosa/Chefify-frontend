import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = useState("recents");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, width: "100vw", zIndex: 1000 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={
          <Link to="/Chefify" style={{ color: "#2A292B" }}>
            <HomeIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={
          <Link to="/favorite" style={{ color: "#2A292B" }}>
            <BookmarkIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={
          <Link to="/" style={{ color: "#2A292B" }}>
            <SearchIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={
          <Link to="/" style={{ color: "#2A292B" }}>
            <SettingsIcon />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
