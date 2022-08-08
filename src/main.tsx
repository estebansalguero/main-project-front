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
import { Signin } from "./Views/ProfileHandling/Signin";
import { Footer } from "./Components/Generalized/Footer";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Navbar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </>
);
