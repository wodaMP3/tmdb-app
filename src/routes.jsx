import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BackToHomeBtn from "./components/BackToHomeBtn/BackToHomeBtn";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RoutesPath = () => {
    return (
        <Router>
      <div>
          <BackToHomeBtn />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />}/>
        </Routes>
      </div>
    </Router>
    )
}

export default RoutesPath;