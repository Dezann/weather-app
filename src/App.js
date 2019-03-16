import React, { Component } from 'react';
import WeatherPage from "./components/WeatherPage"
import './App.css';
import WelcomePage from './components/WelcomePage';

const apiKey = 'd21951248aeab319021a3d9fb808a04b'

class App extends Component {
  state = {
    gotResults: false,
    mapData: null,
    forecastData: null,
    x_cord: null,
    y_cord: null,
  }
  onSubmit = (city) => {
    this.getApiData(city)

  }

  getApiData = (city) => {
    let url =
      "http://api.openweathermap.org/data/2.5/" +
      "weather" +
      "?q=" +
      city +
      "&APPID=" +
      apiKey +
      "&units=metric" +
      "&lang=en"
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result)
        this.setState({ gotResults: true, weatherData: result, x_cord: result.coord.lat, y_cord: result.coord.lon }, () => { this.getMap(city) })
      })
      .catch(error => console.error("Unknown error: " + error));
  }

  getMap = (city) => {
    let url =
      "http://maps.openweathermap.org/maps/2.0/weather/" +
      "TA2/" + 1 + "/" + this.state.x_cord + "/" + this.state.y_cord + "&APPID=" + apiKey
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result)
        this.setState({ forecastData: result })
      })
      .catch(error => console.error("Unknown error: " + error));
  }

  render() {
    const gotResults = this.state.gotResults;
    return (

      !gotResults ? (<WelcomePage onSubmit={this.onSubmit} ></WelcomePage >) : (<WeatherPage weatherData={this.state.weatherData} mapData={this.state.mapData}></WeatherPage>)

    )
  }
}

export default App;
