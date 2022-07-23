import React from "react";

export default function SearchUser() {

  return (
    <div className="crud">
      <p>Name</p>
      <input type="text" id="nameIn" className="inputCrud"/>
      <p>Age</p>
      <input type="text" id="ageIn" className="inputCrud"/>
      <button onClick={createUser}>Create User</button>
      <p id="messageCreate"></p>
    </div>
  );
}


async function createUser() {
    let name = document.getElementById("nameIn").value;
    let age = document.getElementById("ageIn").value;
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "name": name, "age": parseInt(age) })
    };

    const response = await fetch("/crud", requestOptions);
    const data = await response.json();
    document.getElementById("messageCreate").innerHTML = data.error;

    setTimeout(function(){
        document.getElementById("messageCreate").innerHTML = "";
    }, 3000);
}
