import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar/Navbar";
import CreateUser from "./Components/UserFunc/CreateUser";
import ReadUser from "./Components/UserFunc/ReadUser";
import UpdateUser from "./Components//UserFunc/UpdateUser";
import DeleteUser from "./Components/UserFunc/DeleteUser";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="contentContainer">
    <Navbar />
    <div className="mainContentContainer">
      <div className="mainContent">
        <App />
        <div className="rows-container">
          <div className="row1">
            <CreateUser />
            <ReadUser />
          </div>
          <div className="row2">
            <UpdateUser />
            <DeleteUser />
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
