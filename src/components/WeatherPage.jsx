import React, { Component } from 'react';
import "./WeatherPage.css"
import Thunderstorm from "../assets/weather-backgrounds/thunderstorm.jpg"
import Clear from "../assets/weather-backgrounds/thunderstorm.jpg"
import Clouds from "../assets/weather-backgrounds/clouds.jpg"
import Drizzle from "../assets/weather-backgrounds/drizzle.jpg"
import Snow from "../assets/weather-backgrounds/snow.jpg"
import Rain from "../assets/weather-backgrounds/rain.jpg"

class WeatherPage extends Component {
    state = {
        bgStyles: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "whitesmoke",
            backgroundImage: 'url(' + Snow + ') ',
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
        }
    }

    componentDidMount() {
        this.changeBackground()
    }
    changeBackground = () => {
        let mainDescription = this.props.weatherData.weather[0].main
        let weatherImage = null

        switch (mainDescription) {
            case "Clear":
                weatherImage = Clear
                break
            case "Rain":
                weatherImage = Rain
                break
            case "Drizzle":
                weatherImage = Drizzle
                break
            case "Clouds":
                weatherImage = Clouds
                break
            case "Snow":
                weatherImage = Snow
                break
            case "Thunderstorm":
                weatherImage = Thunderstorm
                break
        }
        this.setState({ bgStyles: { ...this.state.bgStyles, backgroundImage: 'url(' + weatherImage + ') ' } })
    }

    render() {
        return (
            <React.Fragment>
                <div style={this.state.bgStyles}>
                    <div className="weather-wrapper">
                        <div className="location">{this.props.weatherData.name}</div>
                        <div className="short-weather-info">{this.props.weatherData.weather[0].description},</div>
                        <div className="degrees">{Math.round(this.props.weatherData.main.temp)}&nbsp;°C</div>
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