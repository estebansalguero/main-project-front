import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Generalized/Navbar";
import { Home } from "./Views/Home/Home";
import { ReviewsPage } from "./Views/ReviewsPage/ReviewsPage";
import { UserCrud } from "./Views/UserCrud/UserCrud";
import { CreateReview } from "./Components/Reviews/CreateReview";
import { FullReview } from "./Components/Reviews/FullReview";
import { About } from "./Views/About/About";
import { Profile } from "./Views/Profile/Profile";
import { Login } from "./Views/Login/Login";
import { Signin } from "./Views/Signin/Signin";
import { Footer } from "./Components/Generalized/Footer";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<UserCrud />} />
        <Route path="/Reviews" element={<ReviewsPage />} />
        <Route path="/Reviews/Create" element={<CreateReview />} />
        <Route path="/Review/:id" element={<FullReview />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);