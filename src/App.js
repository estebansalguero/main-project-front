import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [initialstate, setInitialState] = React.useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("/ping")
      .then(res => res.json())
      .then(data => {
        setInitialState(data);
      }
      );
  }
  , []);

  useEffect(() => {
    getData();
  }
  , []);

  async function getData() {
    let name = document.getElementById("nameIn").value;
    const response = await fetch(`/crud?name=${name}`);
    const data = await response.json();
    setState(data);
  }

  function showName() {
    getData();
    document.getElementById("name").innerHTML = state[0];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{initialstate.status}</p>
        <input type="text" id="nameIn" />
        <button onClick={showName}>Search User</button>
        <p id="name"></p>
      </header>
    </div>
  );
}

export default App;
