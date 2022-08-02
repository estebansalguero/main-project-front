import UserProfile from "../../Components/UserData/UserProfile";
import "./login.css";

export default function Login() {
  return (
    <div className="homeContent">
      <h1>Login</h1>
      <p>Username</p>
      <input type="text" id="userName" />
      <p>Password</p>
      <input type="password" id="password" />
      <button onClick={handleLogin}>Login</button>
      <i>New here? <a href="/Signin" className="signIn">Sign in</a></i>
    </div>
  );
}

async function handleLogin() {
  var data = await getUserlogin();  
  UserProfile.setUserData(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], data[0][5], data[0][6]);
  window.location.href = "/profile";
}



async function getUserlogin() {
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const response = await fetch("/userCrud?userName="+userName+"&password="+password);
  const data = await response.text();
  console.log(data);

  return JSON.parse(data);
}