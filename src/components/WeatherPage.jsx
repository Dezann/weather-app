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
                            <div className="short-weather-info">{this.props.weatherData.weather[0].description},</div>
                            <div className="degrees">{this.props.weatherData.main.temp}&nbsp;°C</div>
                        </div>
                        <div className="sunset">
                            <span><img></img> {(new Date(this.props.weatherData.sys.sunrise * 1000)).getHours()}:{(new Date(this.props.weatherData.sys.sunrise * 1000)).getMinutes()}</span>
                            <span><img></img> {(new Date(this.props.weatherData.sys.sunset * 1000)).getHours()}:{(new Date(this.props.weatherData.sys.sunrise * 1000)).getMinutes()}</span>
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