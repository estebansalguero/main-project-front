import React, { useState } from "react";
import axios from "axios";
import {Preview} from "../Preview";

import "./reviews.css";
export default function CreateReview() {
  const [file, setFile] = useState(null);
  const onInputChange = (event) => {
    setFile(event.target.files[0]);
    var fileName = event.target.files[0].name;
    console.log(fileName);
    setName(fileName);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    var fileName = file.name;
    console.log(fileName);
    formData.append("file", file);
    axios
      .post("/uploadImg", formData)
      .then((res) => {
        console.log("good");
      })
      .catch((err) => {
        console.log(err);
      });
      createReview();
  };

  return (
    <div className="createReview">
      <div className="topCreateReview">
        <div className="restauranteDiv">
          <p>Restaurante</p>
          <input type="text" id="restauranteIn" className="inputReview" />
        </div>
        <div>
          <p>Rating</p>
          <select id="ratingIn" className="inputReview">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <p>Usuario</p>
      <input type="text" id="usuarioIn" className="inputReview" value={sessionStorage.getItem("userName")} disabled/>
      <p>Ubicacion</p>
      <input type="text" id="ubicacionIn" className="inputReview" />
      <p>Review</p>
      <textarea type="textArea" id="reviewIn" className="textAreaReview" />
      <form>
        <input type="file" onChange={onInputChange} />
        <p id="fileName" hidden>a</p>
      </form>

      <button className="crudButton" onClick={onFormSubmit}>
        Create Review
      </button>
      <p id="messageCreate"></p>
    </div>
  );
}

function setName(file) {
  document.getElementById("fileName").innerHTML = file;
}

async function createReview() {
  let restaurante = document.getElementById("restauranteIn").value;
  let usuario = sessionStorage.getItem("userName");
  let rating = parseInt(document.getElementById("ratingIn").value);
  let review = document.getElementById("reviewIn").value;
  let ubicacion = document.getElementById("ubicacionIn").value;
  var todayDate = new Date().toISOString().slice(0, 10);
  let fileName = document.getElementById("fileName").innerHTML;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      restaurante: restaurante,
      usuario: usuario,
      rating: rating,
      review: review,
      created: todayDate,
      ubicacion: ubicacion,
      fileName: fileName,
    }),
  };

  const response = await fetch("/crudReviews", requestOptions);
  const data = await response.text();
  document.getElementById("messageCreate").innerHTML = data;

  setTimeout(function () {
    document.getElementById("messageCreate").innerHTML = "";
    if (data === "Review created!") {
      window.location.href = "/reviews";
    }
  }, 3000);
}
