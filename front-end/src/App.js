import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/loginPage";
import SignUp from "./screens/signUp/signUp";
import Admin from "./screens/adminPage/adminDashBoard";
import LandingPage from "./screens/LandingPage/LandingPage";
import User from "./screens/user/userHome/userHomePage";
import MoneyTransfer from "./screens/user/moneyTransfer/moneyTransfer";
import RegisterComplain from "./screens/user/complain/registerComplain";
import ChequeTransaction from "./screens/user/chequeTransaction/chequeTransaction";
import ChequeDeposit from "./screens/user/chequeDeposit/chequeDeposit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transferMoney" element={<MoneyTransfer />} />
        <Route path="/chequeTransaction" element={<ChequeTransaction />} />
        <Route path="/cehqueDeposit" element={<ChequeDeposit />} />
        <Route path="/registerComplain" element={<RegisterComplain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
