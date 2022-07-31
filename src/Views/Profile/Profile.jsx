import { useEffect } from "react";
import UserProfile from "../../Components/UserData/UserProfile";


export default function Profile() {
  useEffect (() => {
    fillInfo();
    
  }
  , []);

  return (
    <div className="homeContent">
      <h1>Profile</h1>
      <p id="userName"> </p>
      <p id="password"> </p>
      <p id="name"> </p>
      <p id="lastName"> </p>
      <p id="email"> </p>
      <p id="phone"> </p>
      <p id="id" ></p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function fillInfo() {
  console.log(sessionStorage);
  document.getElementById("userName").innerHTML =
    sessionStorage.getItem("userName");
  document.getElementById("password").innerHTML =
    sessionStorage.getItem("password");
  document.getElementById("name").innerHTML = 
    sessionStorage.getItem("name");
  document.getElementById("lastName").innerHTML =
    sessionStorage.getItem("lastName");
  document.getElementById("email").innerHTML = 
    sessionStorage.getItem("correo");
  document.getElementById("phone").innerHTML = 
    sessionStorage.getItem("phone");
  document.getElementById("id").innerHTML = 
    sessionStorage.getItem("id");
}

function handleLogout() {
  sessionStorage.clear();
  window.location.href = "/";
}
