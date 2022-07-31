import UserProfile from "../../Components/UserData/UserProfile";

export default function Login() {
  return (
    <div className="homeContent">
      <h1>Login</h1>
      <p>Username</p>
      <input type="text" id="userName" />
      <p>Password</p>
      <input type="password" id="password" />
      <button onClick={handleLogin}>Login</button>
      <button>Register</button>
    </div>
  );
}

async function handleLogin() {
  var data = await getUserlogin();  
  
  UserProfile.setUserData(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], data[0][5], data[0][6]);
  console.log(sessionStorage);
  window.location.href = "/profile";
}



async function getUserlogin() {
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const response = await fetch("/userCrud?userName="+userName+"&password="+password);
  const data = await response.json();
  return data;
}