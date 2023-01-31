import axios from 'axios'

const API_URL = 'http://localhost:3000/favorites/favorite'

// Add to Favorite
const addToFavorite = async (favoriteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  console.log(favoriteData)
  const response = await axios.post(API_URL, favoriteData, config)

  return response.data
}

// Get All User Favorite
const getAllUserFavoriteRecipes = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + '/' + userId, config)

  return response.data
}

// Delete from Favorites
const deleteFromFavorites = async (favoriteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + '/' + favoriteId, config)

  return response.data
}

const favoriteService = {
  addToFavorite,
  getAllUserFavoriteRecipes,
  deleteFromFavorites,
}

export default favoriteService