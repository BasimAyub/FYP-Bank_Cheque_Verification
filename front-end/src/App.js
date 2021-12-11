import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/myNotes/MyNotes";
import RegisterScreen from "./screens/registerScreen/registerScreen";
import LoginScreen from "./screens/loginScreen/loginScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/notes" element={<MyNotes/>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
