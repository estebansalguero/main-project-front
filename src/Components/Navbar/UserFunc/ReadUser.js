import React from 'react';

export default function ReadUser() {
    return (
        <div className="crud">
            <input type="text" id="nameInSearch" />
            <button onClick={readUser}>Search User</button>
            <p id="name"></p>
        </div>
    );
}

async function readUser() {

  const name = document.getElementById("nameInSearch").value;
  const response = await fetch("/crud?name=" + name);
  const data = await response.json();
  document.getElementById("name").innerHTML = data;

  
}
