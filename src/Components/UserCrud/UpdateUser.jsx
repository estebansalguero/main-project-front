import React from "react";

export default function UpdateUser() {
  return (
    <div className="crud">
      <p>Nombre Actual</p>
      <input type="text" id="indNameInUpdate" className="inputCrud"/>
      <p>Apellido Actual</p>
      <input type="text" id="indApellidoInUpdate" className="inputCrud"/>
      <p>Nombre Nuevo</p>
      <input type="text" id="nameInUpdate" className="inputCrud"/>
      <p>Apellido Nuevo</p>
      <input type="text" id="apellidoInUpdate" className="inputCrud"/>
      <p>Correo Nuevo</p>
      <input type="text" id="emailInUpdate" className="inputCrud"/>
      <p>Telefono Nueva</p>
      <input type="text" id="phoneInUpdate" className="inputCrud"/>
      <button onClick={updateUser}>Update User</button>
      <p id="messageUpdate"></p>
    </div>
  );
}

async function updateUser() {
  let indName = document.getElementById("indNameInUpdate").value;
  let indApellido = document.getElementById("indApellidoInUpdate").value;
  let name = document.getElementById("nameInUpdate").value;
  let apellido = document.getElementById("apellidoInUpdate").value;
  let email = document.getElementById("emailInUpdate").value;
  let phone = document.getElementById("phoneInUpdate").value;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      indNombre: indName, 
      indApellido: indApellido, 
      nombre: name, 
      apellido: apellido,
      correo: email, 
      telefono: phone, }),
  };

  const response = await fetch("/userCrud", requestOptions);
  const data = await response.json();
  document.getElementById("messageUpdate").innerHTML = data.error;

  setTimeout(function () {
    document.getElementById("messageUpdate").innerHTML = "";
  }, 3000);
}
