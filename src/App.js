import React, { Component } from 'react';
import WeatherPage from "./components/WeatherPage"
import './App.css';
import WelcomePage from './components/WelcomePage';


const api_key = 'd21951248aeab319021a3d9fb808a04b'

class App extends Component {
  render() {
    return (
      <WelcomePage></WelcomePage>
    )
  }
}

export default App;
