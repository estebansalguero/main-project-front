import { useEffect, useState } from "react";
import "./reviews.css";

export const FullReview = () => {
  function editReview() {
    var id = parseInt(document.getElementById("idRev").innerHTML);
    window.location.href = `/editReview/${id}`;
  }

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
    document.getElementById("ubicacion").innerHTML = data[0][7];
    document.getElementById("created").innerHTML = data[0][5].slice(0, 10);
    document.getElementById("review").innerHTML = data[0][4];
    document.getElementById("image").src =
      import.meta.env.VITE_IMG_URL + data[0][8];
    if (data[0][6] !== null) {
      document.getElementById("edited").hidden = false;
    }
    if (data[0][2] === sessionStorage.getItem("userName")) {
      console.log("entro");
      document.getElementById("editButton").hidden = false;
      document.getElementById("deleteButton").hidden = false;
    }
  }
  getReview();
  return (
    <div className="container bg-em_white">
      <div className="fullReview">
        <div className="revHeader">
          <p id="idRev" hidden></p>
          <h1 className="restaurante" id="restaurante"></h1>
          <div className="revInfo">
            <div className="authorDiv">
              <div className="headSection">
                <h3>Author</h3>
                <h2 className="usuario" id="usuario"></h2>
              </div>
            </div>
            <div className="otherDiv">
              <div className="headSection">
                <h3>Rating</h3>
                <p className="rating" id="rating"></p>
              </div>
              <div className="headSection">
                <h3>Location</h3>
                <p className="ubicacion" id="ubicacion"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="subheader">
          <p className="created" id="created"></p>
          <p className="edited" id="edited" hidden>
            (edited)
          </p>
        </div>
        <div className="allText">
          <p className="review" id="review"></p>
        </div>
        <div className="imageRev">
          <img className="image" id="image" />
        </div>
        <p id="messageRev"></p>
        <div id="actionsRev" className="actionsRev">
          <button
            id="deleteButton"
            className="deleteButton"
            onClick={deleteReview}
            hidden
          >
            Delete Review
          </button>
          <button
            id="editButton"
            className="editButton"
            onClick={editReview}
            hidden
          >
            Edit Review
          </button>
        </div>
      </div>
    </div>
  );
};
