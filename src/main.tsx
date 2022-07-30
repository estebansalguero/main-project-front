import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import UserCrud from "./Views/UserCrud/UserCrud";
import Home from "./Views/Home/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<UserCrud />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
