import "./reviewsPage.css";
import axios from "axios";
import React from "react";
import { useState } from "react";

export default function ReviewsPage() {
  getAllReviews();
  return (
    <div className="reviewsContent">
      <div className="reviewsContentBody">
        <div className="reviewsContentBodyHeader">
          <h1>Reviews</h1>
          {sessionStorage.getItem("userName") != null ? (
            <a className="createReviewButton" href="/Reviews/Create">
              Create Review
            </a>
          ) : (
            <a className="createReviewButton" href="/Login">
              Login to create a review
            </a>
          )}
        </div>

        <div id="cards" className="cards"></div>
      </div>
    </div>
  );
}

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

async function getAllReviews() {
  var response = await fetch("/crudReviews");
  var data = await response.text();
  var reviews = JSON.parse(data);
  console.log(reviews);

  if (!document.getElementById("cards").hasChildNodes()) {
    for (var i = 0; i < Object.keys(reviews).length; i++) {
      var review = reviews[i];
      var reviewDiv = htmlToElement(`
      <div class="card">
        <div class="card--image">
          <img src="http://localhost:4000/public/${
            review[7]
          }" alt="" width=200px>
        </div>
        <div class="card--content">
           <div class="card--location">
            <p class="card--content--location">${review[6]}</p>
           </div>

           <h3 class="card--content--title">${review[1]}</h3>
              <p class="card--content--author">${review[2]}</p>
              <p class="card--content--date">${review[5].slice(0, 10)}</p>

        </div>
        <div class="card--actions">
            <a class="card--action" href="/Review/${review[0]}">See</a>
        </div>
      </div>`);
      document.getElementById("cards").appendChild(reviewDiv);
    }
  }
}
