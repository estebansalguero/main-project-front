import "./reviewsPage.css";
import axios from 'axios';
import React from "react";
import { useState } from "react";

export default function ReviewsPage() {


  getAllReviews();
  return (
    <div className="reviewsContent">
      <div className="reviewsContentBody">
        <div className="reviewsContentBodyHeader">
          <h1>Reviews</h1>
          <a className="createReviewButton" href="/Reviews/Create">
            Create Review
          </a>
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
  var data = await response.json();
  var revs = Object.assign({}, data);
  var allRevs = {};

  for (var i = 0; i < Object.keys(revs).length; i++) {
    allRevs[i] = revs[i];
  }

  if (!document.getElementById("cards").hasChildNodes()) {
    for (var i = 0; i < Object.keys(allRevs).length; i++) {
      var review = allRevs[i];
      var reviewDiv = htmlToElement(`
      <div class="card">
        <div class="card--image">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" width=200px>
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

