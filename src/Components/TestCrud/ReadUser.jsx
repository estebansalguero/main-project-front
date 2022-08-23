import React from "react";

export default function ReadUser() {
  return (
    <div className="crud">
      <p>Name</p>
      <input type="text" id="nameInSearch" className="inputCrud"/>
      <button onClick={readUser}>Search User</button>
      <table className="searchTable">
        <thead id="userHead"></thead>
        <tbody id="userTable"></tbody>
      </table>
      <p id="messageSearch"></p>
    </div>
  );
}

async function readUser() {
  const name = document.getElementById("nameInSearch").value;
  const response = await fetch("/crud?name=" + name);
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
    head.innerHTML = "<tr><th>ID</th><th>Name</th><th>Age</th></tr>";
    table.innerHTML = "";
    data.forEach(function (user) {
      let row = table.insertRow(-1);
      let idCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let ageCell = row.insertCell(2);
      idCell.innerHTML = user[0];
      nameCell.innerHTML = user[1];
      ageCell.innerHTML = user[2];
    });
  }
}
