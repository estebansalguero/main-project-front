import React from "react";
import { BrowserRouter, BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import UserCrud from "./Views/UserCrud/UserCrud";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" component={<UserCrud />} />
      </Routes>
    </BrowserRouter>
  );
}
