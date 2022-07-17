import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <button onClick={ping} className="pingButton">Click me to ping the API</button>
    </div>
  );
}

export default App;

async function ping() {
  let start = new Date().getTime();
  const response = await fetch("/ping");
  const data = await response.json();

  let diff = new Date().getTime() - start;
  setPingIndicator(data.status, diff);
}

function setPingIndicator(status, time) {
  document.getElementsByClassName("pingButton")[0].innerHTML = (status+" "+time+"ms");

  setTimeout(function () {
    document.getElementsByClassName("pingButton")[0].innerHTML = "Click me to ping the API";
  }, 5000);


}
