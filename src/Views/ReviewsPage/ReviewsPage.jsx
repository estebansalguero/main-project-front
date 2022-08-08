import "./reviewsPage.css";
import axios from "axios";
import React from "react";
import { useState } from "react";

export const ReviewsPage = () => {
  getAllReviews();
  return (
    <div className="flex flex-col items-center justify-center h-screen min-w-0">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row justify-between items-center w-11/12 pt-0 border-solid border-2 border-white ">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-6xl">
            Reviews
          </p>
          {sessionStorage.getItem("userName") != null ? (
            <a
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              href="/Reviews/Create"
            >
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
};

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

  if (!document.getElementById("cards").hasChildNodes()) {
    for (var i = 0; i < Object.keys(reviews).length; i++) {
      var review = reviews[i];
      var reviewDiv = htmlToElement(`
      <div class="card">
        <div class="card--image">
          <img src="${import.meta.env.VITE_IMG_URL}${
        review[7]
      }" alt="" width=200px>
        </div>

        <div class="anotherContainer">
        <div class="card--content">
        
        <h3 class="card--content--title">${review[1]}</h3>
        <div class="yetanotherContainer">
           <div class="card--location">
            <p class="card--content--location">${review[6]}</p>
           </div>

              <p class="card--content--author">${review[2]}</p>
           </div>
              <p class="card--content--date">${review[5].slice(0, 10)}</p>

        </div>
        <div class="card--actions">
            <a class="card--action" href="/Review/${review[0]}">See</a>
        </div>
        </div>
      </div>`);
      document.getElementById("cards").appendChild(reviewDiv);
    }
  }
}
