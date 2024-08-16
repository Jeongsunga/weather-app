import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const WeatherButton = () => {
  return (
    <div className="weather-button">
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">My Location</Button>
            <Button variant="secondary">New York</Button>
            <Button variant="secondary">London</Button>
            <Button variant="secondary">Paris</Button>
            <Button variant="secondary">Tokyo</Button>
            <Button variant="secondary">Random</Button>
        </ButtonGroup>
    </div>
  )
}

export default WeatherButton