import React, { Component } from 'react';
import WeatherPage from "./components/WeatherPage"
import './App.css';
import WelcomePage from './components/WelcomePage';

const apiKey = 'd21951248aeab319021a3d9fb808a04b'

class App extends Component {
  state = {
    gotResults: false,
    weatherData: null
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
        this.setState({ gotResults: true, weatherData: result })
      })
      .catch(error => console.error("Unknown error: " + error));
  }


  render() {
    const gotResults = this.state.gotResults;
    return (

      !gotResults ? (<WelcomePage onSubmit={this.onSubmit} ></WelcomePage >) : (<WeatherPage weatherData={this.state.weatherData}></WeatherPage>)

    )
  }
}

export default App;
