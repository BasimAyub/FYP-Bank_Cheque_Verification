import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/loginPage";
import SignUp from "./screens/signUp/signUp";
import Admin from "./screens/adminPage/adminDashBoard";
import LandingPage from "./screens/LandingPage/LandingPage";
import User from "./screens/user/userHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
