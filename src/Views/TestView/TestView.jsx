import React from "react";
import App from "../../Components/PingButton/Ping";
import CreateUser from "../../Components/TestCrud/CreateUser";
import DeleteUser from "../../Components/TestCrud/DeleteUser";
import UpdateUser from "../../Components/TestCrud/UpdateUser";
import ReadUser from "../../Components/TestCrud/ReadUser";
import "./TestView.css";

export default function TestView() {
  return (
    <div className="content">
      <App />
      <div className="crudContainer">
        <div className="containerRow">
          <CreateUser />
          <DeleteUser />
        </div>
        <div className="containerRow">
          <UpdateUser />
          <ReadUser />
        </div>
      </div>
    </div>
  );
}
