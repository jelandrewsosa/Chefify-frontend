import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favoriteService from "./favoriteService";

const initialState = {
  favorites: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add to favorite
export const addToFavorite = createAsyncThunk(
  "favorite/create",
  async (favoriteData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await favoriteService.addToFavorite(favoriteData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All User Favorites
export const getAllUserFavoriteRecipes = createAsyncThunk(
  "favorite/getAll",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await favoriteService.getAllUserFavoriteRecipes(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Add delete from favorites
export const deleteFromFavorites = createAsyncThunk(
  "favorite/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await favoriteService.deleteFromFavorites(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Favorites
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Add Favorite
      .addCase(addToFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favorites.push(action.payload);
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      // Get aLL User Favorites
      .addCase(getAllUserFavoriteRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // filter to update the ui when delete a favorite
        state.favorites = action.payload;
      })
      .addCase(getAllUserFavoriteRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Delete
      .addCase(deleteFromFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // filter to update the ui when delete a favorite
        state.favorites = state.favorites.filter(
          (favorite) => favorite._id !== action.payload.id
        );
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = favoriteSlice.actions;
export default favoriteSlice.reducer;
