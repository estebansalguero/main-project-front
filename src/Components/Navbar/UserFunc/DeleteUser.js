import React from "react";

export default function DeleteUser() {
  return (
    <div className="crud">
      <p>ID</p>
      <input type="text" id="idInDelete" />
      <button onClick={deleteUser}>Delete User</button>
      <p id="messageDelete"></p>
    </div>
  );
}

async function deleteUser() {
  let id = parseInt(document.getElementById("idInDelete").value);
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  };
  const response = await fetch("/crud", requestOptions);
  const data = await response.json();
  document.getElementById("messageDelete").innerHTML = data.error;
  setTimeout(function () {
    document.getElementById("messageDelete").innerHTML = "";
  }, 3000);
}
