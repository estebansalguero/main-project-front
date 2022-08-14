//the idea is render the App.tsx file in main, but in this moment doesn't work

import React, { FC } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import { Footer } from "./Components/Generalized/Footer";
import { Navbar } from "./Components/Generalized/Navbar";
import { CreateReview } from "./Components/Reviews/CreateReview";
import { EditReview } from "./Components/Reviews/EditReview";
import { FullReview } from "./Components/Reviews/FullReview";
import { About } from "./Views/About/About";
import { Home } from "./Views/Home/Home";
import { UserCrud } from "./Views/UserCrud/UserCrud";
import { Login } from "./Views/Login/Login";
import { Profile } from "./Views/Profile/Profile";
import { ReviewsPage } from "./Views/ReviewsPage/ReviewsPage";
import { Signin } from "./Views/ProfileHandling/Signin";
import { Update } from "./Views/ProfileHandling/Update";


export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<UserCrud />} />
        <Route path="/Reviews" element={<ReviewsPage />} />
        <Route path="/Reviews/Create" element={<CreateReview />} />
        <Route path="/Review/:id" element={<FullReview />} />
        <Route path="/editReview/:id" element={<EditReview />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </>
  );
};
