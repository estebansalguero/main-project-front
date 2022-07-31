import React, { useState } from "react";

import "./reviews.css";
export default function CreateReview() {
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
      <input type="text" id="usuarioIn" className="inputReview" />
      <p>Ubicacion</p>
      <input type="text" id="ubicacionIn" className="inputReview" />
      <p>Review</p>
      <textarea type="textArea" id="reviewIn" className="textAreaReview" />
      <button className="crudButton" onClick={createReview}>
        Create Review
      </button>
      <p id="messageCreate"></p>
    </div>
  );
}

async function createReview() {
  let restaurante = document.getElementById("restauranteIn").value;
  let usuario = document.getElementById("usuarioIn").value;
  let rating = parseInt(document.getElementById("ratingIn").value);
  let review = document.getElementById("reviewIn").value;
  let ubicacion = document.getElementById("ubicacionIn").value;
  var todayDate = new Date().toISOString().slice(0, 10);

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
    }),
  };

  const response = await fetch("/crudReviews", requestOptions);
  const data = await response.json();
  document.getElementById("messageCreate").innerHTML = data.error;

  setTimeout(function () {
    document.getElementById("messageCreate").innerHTML = "";
    if (data.error === "Review created!") {
      window.location.href = "/reviews";
    }
  }, 3000);
}

