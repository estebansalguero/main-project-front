import React, { useState } from "react";
import axios from "axios";
import { Preview } from "../Preview";

export const CreateReview = () => {
  const [file, setFile] = useState(null);
  const onInputChange = (event) => {
    setFile(event.target.files[0]);
    var fileName = event.target.files[0].name;
    setName(fileName);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    var fileName = file.name;
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
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create Review
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Create a new review for a restaurant.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="restauranteIn"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Restaurant
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="restauranteIn"
                        id="restauranteIn"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="ubicacionIn"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="ubicacionIn"
                        id="ubicacionIn"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-1 sm:col-span-1">
                      <label
                        htmlFor="ratingIn"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Rating
                      </label>
                      <select
                        name="ratingIn"
                        id="ratingIn"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reviewIn"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Review
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="reviewIn"
                      name="reviewIn"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write a review for the restaurant.
                  </p>
                </div>

                <div>
                  <form>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Image
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <input onChange={onInputChange} type="file" />
                            <p id="messageCreate" />
                          </label>
                        </div>
                        <p id="fileName" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={onFormSubmit}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

  console.log(fileName);

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
