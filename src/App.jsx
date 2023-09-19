import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import MainLayout from "./Layouts/MainLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import MainLayout from "./Components/Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
