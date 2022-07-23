import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import CreateUser from "./components/UserFunc/CreateUser";
import ReadUser from "./Components/UserFunc/ReadUser";
import UpdateUser from "./components/UserFunc/UpdateUser";
import DeleteUser from "./components/UserFunc/DeleteUser";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <div className="content">
      <div className="mainContent">
        <div>
          <App />
        </div>
        <div className="crud-stuff">
          <div className="crud-stuff-row">
            <CreateUser />
            <ReadUser />
          </div>
          <div className="crud-stuff-row">
            <UpdateUser />
            <DeleteUser />
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
