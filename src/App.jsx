import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BackToHomeBtn from "./components/BackToHomeBtn/BackToHomeBtn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/global.css';

const App = () => {

  return  (
    <Router>
      <div>
          <BackToHomeBtn />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App
