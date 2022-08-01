import UserProfile from "../../Components/UserData/UserProfile";

export default function Login() {
  return (
    <div className="homeContent">
      <h1>Sign in</h1>
      <p>Username</p>
      <input type="text" id="userName" />
      <p>Password</p>
      <input type="password" id="password" />
      <p>First Name</p>
      <input type="text" id="nameIn" />
      <p>Last Name</p>
      <input type="text" id="apellidoIn" />
      <p>Email</p>
      <input type="text" id="correoIn" />
      <p>Phone</p>
      <input type="text" id="telefonoIn" />
      <button onClick={handleSignin}>Sign In</button>
      <p id="messageCreate"></p>
    </div>
  );
}

async function handleSignin() {
  var data = await setUserlogin();
}

async function setUserlogin() {
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  let nombre = document.getElementById("nameIn").value;
  let apellido = document.getElementById("apellidoIn").value;
  let correo = document.getElementById("correoIn").value;
  let telefono = document.getElementById("telefonoIn").value;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: userName,
      password: password,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
    }),
  };

  const response = await fetch("/userCrud", requestOptions);
  const data = await response.text();
  document.getElementById("messageCreate").innerHTML = data;

  setTimeout(function () {
    document.getElementById("messageCreate").innerHTML = "";

    window.location.href = "/login";
  }, 3000);
}
