import CreateUser from "../../Components/UserCrud/CreateUser";
import DeleteUser from "../../Components/UserCrud/DeleteUser";
import UpdateUser from "../../Components/UserCrud/UpdateUser";
import ReadUser from "../../Components/UserCrud/ReadUser";

export const UserCrud = () => {
  return (
    <div className="crudContent">
      <div className="containerRow">
        <CreateUser />
        <ReadUser />
      </div>
      <div className="containerRow">
        <UpdateUser />
        <DeleteUser />
      </div>
    </div>
  );
};
