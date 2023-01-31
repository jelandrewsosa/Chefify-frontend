import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import App from './App';
import { store } from './app/store.js'
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn/index.jsx'
import RecipeDetailsView from './components/RecipeDetailsView';
import FavoriteRecipesView from './components/FavoriteRecipesView';
import SignUp from './components/SignUp/index.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import FavoriteRecipeCategoryDetails from './components/FavoriteRecipesCategoryDetails';
import FavoriteRecipeCardDetails from './components/FavoriteRecipeCardDetails';
import FeaturedRecipeCardDetails from './components/FeaturedRecipeCardDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Chefify" element={<App />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recipe" element={<RecipeDetailsView/>} />
          <Route path="/favorite" element={<FavoriteRecipesView />} />
          <Route path="/favorite/category" element={<FavoriteRecipeCategoryDetails />}/>
          <Route path="/favorite/recipe" element={<FavoriteRecipeCardDetails />}/>
          <Route path="/featured/recipe" element={<FeaturedRecipeCardDetails />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
