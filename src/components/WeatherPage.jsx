import React, { Component } from 'react';
import "./WeatherPage.css"


class WeatherPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="left-column">
                        <div className="weather-wrapper">
                            <div className="location">Warsaw</div>
                            <div className="short-weather-info">Sunny</div>
                            <div className="degrees">18</div>
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