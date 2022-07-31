import React from "react";
import Ping from "../../Components/PingButton/Ping";
import "./Home.css";
import Image from "./../../Assets/images/empanada.png";

export default function Home() {
  return (
    <div className="homeContent">
      <div className="homeContentBody">
        <h1>Empanada Review</h1>
        <span>
          <p>
            Empanada Review is a web application that allows you to review your
            favorite empanadas. You can add your own empanadas to the database,
            and then view them all.
          </p>
          <p> Copilot wrote that lmao </p>
          <p>
            Bueno, EmpanadaReview sigue en desarrollo, estamos teniemdo más
            problemas con lo que es la base de datos ya que oracle es un dolor,
            pero ahí vamos :D
          </p>
        </span>
        <img src={Image} width="150"></img>
        <Ping />
      </div>
    </div>
  );
}
