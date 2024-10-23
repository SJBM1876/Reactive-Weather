import React from "react";
import Sunny from "../assets/Sunny.svg";
import Rainy from "../assets/Rainy.svg";
import Cloudy from "../assets/Cloudy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";
import Snowy from "../assets/snowy.webp"

const forecastImages = {
  Sunny: Sunny,
  Cloudy: Cloudy,
  Rainy: Rainy,
  'Partly cloudy': PartlyCloudy,
  Snowy: Snowy
};



function WeatherCard({ city, temperature, forecast }) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img-top" src={forecastImages[forecast]} alt="Card image cap" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{city}</h3>
        <h5 className="card-text">{temperature}°C</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;