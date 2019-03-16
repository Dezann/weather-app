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
                    <div className="weather-wrapper">
                        <div className="location">{this.props.weatherData.name}</div>
                        <div className="short-weather-info">{this.props.weatherData.weather[0].description},</div>
                        <div className="degrees">{this.props.weatherData.main.temp}&nbsp;°C</div>
                    </div>
                    <div className="sunset">
                        <div>{(new Date(this.props.weatherData.sys.sunrise * 1000)).getHours()}:{(new Date(this.props.weatherData.sys.sunrise * 1000)).getMinutes()}<p>🌅</p></div>
                        <div>{(new Date(this.props.weatherData.sys.sunset * 1000)).getHours()}:{(new Date(this.props.weatherData.sys.sunrise * 1000)).getMinutes()}<p>🌇</p></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherPage;