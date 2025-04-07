import React from 'react'
import '../App.css';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="weather-button">
      <ButtonGroup aria-label="Basic example">
        <Container>
          <Row>
            <Col lg={3} sm={12}>
              <Button
                variant={selectedCity === null ? "dark" : "secondary"}
                onClick={() => handleCityChange("current")}
              >
                My Location
              </Button>
            </Col>
            {cities.map((city) => (
              <Col key={city} lg={3} sm={12}>
                <Button
                  variant={selectedCity === city ? "dark" : "secondary"}
                  onClick={() => handleCityChange(city)}
                >
                  {city}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </ButtonGroup>
    </div>
  )
}

export default WeatherButton