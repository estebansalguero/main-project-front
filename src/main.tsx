import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import UserCrud from "./Views/UserCrud/UserCrud";
import Home from "./Views/Home/Home";
import ReviewsPage from "./Views/ReviewsPage/ReviewsPage";
import CreateReview from "./Components/Reviews/CreateReview";
import FullReview from "./Components/Reviews/FullReview";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
      <Navbar />
      <div className="mainContent">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<UserCrud />} />
            <Route path="/Reviews" element={<ReviewsPage />} />
            <Route path="/Reviews/Create" element={<CreateReview />} />
            <Route path="/Review/:id" element={<FullReview />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
  </>
);
