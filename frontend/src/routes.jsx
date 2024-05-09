import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BackToHomeBtn from "./components/BackToHomeBtn/BackToHomeBtn";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginButton from "./components/LoginButton/LoginButton";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import GoToFavsButton from "./components/GoToFavsButton/GoToFavsButton";
import Auth  from './utils/firebaseAuth';

const RoutesPath = () => {
    return (
        <Router>
      <div>
          <BackToHomeBtn />
          <LoginButton />
          <GoToFavsButton />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<RegistrationPage />}/>
          <Route path="/movie/:id" element={<MovieDetailsPage />}/>
          <Route path="/favourites" element={<FavouritesPage />}/>
        </Routes>
      </div>
    </Router>
    )
}

export default RoutesPath;