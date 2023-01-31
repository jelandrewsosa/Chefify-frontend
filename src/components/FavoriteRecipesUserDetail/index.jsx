import { useState, useEffect } from "react";
import style from "./style.module.css";

export default function FavoriteRecipeUserDetail() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div>
      <h2>{user.firstName}</h2>
    </div>
  );
}
