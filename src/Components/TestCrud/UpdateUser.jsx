import React from "react";

export default function UpdateUser() {
  return (
    <div className="crud">
      <p>ID</p>
      <input type="text" id="idInUpdate" className="inputCrud"/>
      <p>Name</p>
      <input type="text" id="nameInUpdate" className="inputCrud"/>
      <p>Age</p>
      <input type="text" id="ageInUpdate" className="inputCrud"/>
      <button onClick={updateUser}>Update User</button>
      <p id="messageUpdate"></p>
    </div>
  );
}

async function updateUser() {
  let id = parseInt(document.getElementById("idInUpdate").value);
  let name = document.getElementById("nameInUpdate").value;
  let age = parseInt(document.getElementById("ageInUpdate").value);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, name: name, age: age }),
  };

  const response = await fetch("/crud", requestOptions);
  const data = await response.json();
  document.getElementById("messageUpdate").innerHTML = data.error;

  setTimeout(function () {
    document.getElementById("messageUpdate").innerHTML = "";
  }, 3000);
}
