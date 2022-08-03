import { useEffect, useState } from "react";
import "./reviews.css";

export const FullReview = () => {
  getReview();
  return (
    <div className="fullReview">
      <div className="revHeader">
        <p id="idRev" hidden></p>
        <h1 className="restaurante" id="restaurante"></h1>
        <div className="headSection">
          <h3>Author</h3>
          <h2 className="usuario" id="usuario"></h2>
        </div>
        <div className="headSection">
          <h3>Rating</h3>
          <h2 className="rating" id="rating"></h2>
        </div>
        <div className="headSection">
          <h3>Location</h3>
          <p className="ubicacion" id="ubicacion"></p>
        </div>
      </div>
      <div className="subheader">
        <p className="created" id="created"></p>
      </div>
      <div className="allText">
        <p className="review" id="review"></p>
      </div>
      <p id="messageRev"></p>
      <div id="deleteRev" className="deleteReview">
        <button className="deleteButton" onClick={deleteReview}>
          Delete Review
        </button>
      </div>
    </div>
  );
};

async function deleteReview() {
  var id = parseInt(document.getElementById("idRev").innerHTML);
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  };
  const response = await fetch("/loneReview", requestOptions);
  const data = await response.text();
  document.getElementById("messageRev").innerHTML = data;
  setTimeout(function () {
    window.location.href = "/reviews";
  }, 3000);
}

async function getReview() {
  var given_URL = window.location.pathname.split("/");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    `/loneReview?id=${given_URL[2]}`,
    requestOptions
  );
  const data = await response.json();
  document.getElementById("idRev").innerHTML = data[0][0];
  document.getElementById("restaurante").innerHTML = data[0][1];
  document.getElementById("usuario").innerHTML = data[0][2];
  document.getElementById("rating").innerHTML = data[0][3];
  document.getElementById("ubicacion").innerHTML = data[0][6];
  document.getElementById("created").innerHTML = data[0][5].slice(0, 10);
  document.getElementById("review").innerHTML = data[0][4];
  console.log(data[0][2], sessionStorage.getItem("userName"));
  if (data[0][2] === sessionStorage.getItem("userName")) {
    document.getElementById("deleteRev").hidden = false;
  } else {
    document.getElementById("deleteRev").hidden = true;
  }
}
