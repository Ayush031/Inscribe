import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/Form4";
import Certificate from "./pages/Certificate";

// Axios
axios.defaults.baseURL = "https://inscribe-backend.vercel.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/form1" element={<Form1 />}></Route>
        <Route path="/form2" element={<Form2 />}></Route>
        <Route path="/form3" element={<Form3 />}></Route>
        <Route path="/form4" element={<Form4 />}></Route>
        <Route path="/certificate" element={<Certificate />}></Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
