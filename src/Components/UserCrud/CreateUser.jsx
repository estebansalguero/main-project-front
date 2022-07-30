import React from "react";

export default function CreateUser() {
  return (
    <div className="crud">
      <p>Nombre</p>
      <input type="text" id="nameIn" className="inputCrud" />
      <p>Apellido</p>
      <input type="text" id="apellidoIn" className="inputCrud" />
      <p>Correo</p>
      <input type="text" id="correoIn" className="inputCrud" />
      <p>Telefono</p>
      <input type="text" id="telefonoIn" className="inputCrud" />
      <button onClick={createUser}>Create User</button>
      <p id="messageCreate"></p>
    </div>
  );
}

async function createUser() {
  let nombre = document.getElementById("nameIn").value;
  let apellido = document.getElementById("apellidoIn").value;
  let correo = document.getElementById("correoIn").value;
  let telefono = document.getElementById("telefonoIn").value;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono
    }),
  };

  const response = await fetch("/userCrud", requestOptions);
  const data = await response.json();
  document.getElementById("messageCreate").innerHTML = data.error;

  setTimeout(function () {
    document.getElementById("messageCreate").innerHTML = "";
  }, 3000);
}
