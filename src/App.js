import React from "react";
import logo from "./logo.svg";
import {useEffect, useState} from "react";

function App() {
  const [initialstate, setInitialState] = React.useState([]);

  useEffect(() => {
    fetch("/ping")
      .then(res => res.json())
      .then(data => {
        setInitialState(data);
      }
      );
  }
  , []);

  return (
    <div className="App">
        <p className="pingIndicator">{initialstate.status}</p>
    </div>
  );
}

export default App;
