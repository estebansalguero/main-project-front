import React from "react";

export default function ReadUser() {
  return (
    <div className="crud">
      <p>Nombre</p>
      <input type="text" id="nombreInSearch" className="inputCrud"/>
      <p>Apellido</p>
      <input type="text" id="apellidoInSearch" className="inputCrud"/>
      <button className="crudButton" onClick={readUser}>Search User</button>
      <table className="searchTable">
        <thead id="userHead"></thead>
        <tbody id="userTable"></tbody>
      </table>
      <p id="messageSearch"></p>
    </div>
  );
}

async function readUser() {
  const nombre = document.getElementById("nombreInSearch").value;
  const apellido = document.getElementById("apellidoInSearch").value;
  const response = await fetch("/userCrud?nombre="+nombre+"&apellido="+apellido);
  const data = await response.json();
  let table = document.getElementById("userTable");
  let head = document.getElementById("userHead");
  if (data.error === "Missing required fields" || data.error === "User not found") {
    head.innerHTML = "";
    table.innerHTML = "";
    document.getElementById("messageSearch").innerHTML = data.error;
    setTimeout(function () {
      document.getElementById("messageSearch").innerHTML = "";
    }, 3000);
  } else {
    head.innerHTML = "<tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Teléfono</th></tr>";
    table.innerHTML = "";
    data.forEach(function (user) {
      let row = table.insertRow(-1);
      let idCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let ageCell = row.insertCell(2);
      let emailCell = row.insertCell(3);
      let phoneCell = row.insertCell(4);
      idCell.innerHTML = user[0];
      nameCell.innerHTML = user[1];
      ageCell.innerHTML = user[2];
      emailCell.innerHTML = user[3];
      phoneCell.innerHTML = user[4];
    });
  }
}
