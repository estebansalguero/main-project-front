import React from "react";

export default function DeleteUser() {
  return (
    <div className="crud">
      <p>Nombre</p>
      <input type="text" id="nombreInDelete" className="inputCrud"/>
      <p>Apellido</p>
      <input type="text" id="apellidoInDelete" className="inputCrud"/>
      <button className="crudButton" onClick={deleteUser}>Delete User</button>
      <p id="messageDelete"></p>
    </div>
  );
}

async function deleteUser() {
  let nombre = document.getElementById("nombreInDelete").value;
  let apellido = document.getElementById("apellidoInDelete").value;

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: nombre, apellido: apellido }),
  };
  const response = await fetch("/userCrud", requestOptions);
  const data = await response.json();
  document.getElementById("messageDelete").innerHTML = data.error;
  setTimeout(function () {
    document.getElementById("messageDelete").innerHTML = "";
  }, 3000);
}
