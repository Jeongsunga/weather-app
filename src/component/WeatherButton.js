import React from 'react'
import '../App.css';
import { Button, ButtonGroup } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div>
        <div className="weather-button">
        <ButtonGroup aria-label="Basic example">
            <Button
            variant={`${selectedCity === null ? "dark" : "secondary"}`}
            onClick={() => handleCityChange("current")}>My Location</Button>

            {cities.map((city) => (
              <Button
              variant={`${selectedCity === city ? "dark" : "secondary"}`}
              onClick={() => handleCityChange(city)}>{city}</Button>))}
        </ButtonGroup>
    </div>
    </div>
  )
}

export default WeatherButton