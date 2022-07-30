import React from "react";
import App from "../../Components/PingButton/Ping";
import CreateUser from "../../Components/UserCrud/CreateUser";
import DeleteUser from "../../Components/UserCrud/DeleteUser";
import UpdateUser from "../../Components/UserCrud/UpdateUser";
import ReadUser from "../../Components/UserCrud/ReadUser";

export default function TestView() {
  return (
    <div className="crudContent">
      <div className="crudMoving">
        <div className="crudContentBody">
          <div className="containerRow">
            <CreateUser />
            <ReadUser />
          </div>
          <div className="containerRow">
            <UpdateUser />
            <DeleteUser />
          </div>
        </div>
      </div>
    </div>
  );
}
