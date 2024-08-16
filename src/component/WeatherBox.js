import React from 'react'
import '../App.css';

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
    let tempCelsius = weather?.main.temp;
    let tempFahrenheit = tempCelsius ? (tempCelsius * 1.8) + 32 : null;
  return (
    <div className="weather-box">
        <div>{weather?.name}</div>
        <h2> {tempCelsius}°C / {tempFahrenheit?.toFixed(2)}°F</h2>
        <div>체감 온도 : {weather?.main.feels_like}°C</div>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox