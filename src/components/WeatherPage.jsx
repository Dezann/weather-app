import React, { Component } from 'react';
import "./WeatherPage.css"


class WeatherPage extends Component {
    state = {}

    renderData = data => {

    }

    render() {
        return (
            <React.Fragment>
                <div className="weather-background">
                    <div className="left-column">
                        <div className="weather-wrapper">
                            <div className="location">{this.props.weatherData.name}</div>
                            <div className="short-weather-info">{this.props.weatherData.weather[0].description}</div>
                            <div className="degrees">{this.props.weatherData.main.temp}</div>
                        </div>
                    </div>
                    <div className="right-column">
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherPage;