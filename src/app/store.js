import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import favoriteReducer from '../features/favorites/favoriteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
  }
})