import React, { Component } from 'react';
import "./WelcomePage.css"

class WelcomePage extends Component {
    state = {
        cityInput: React.createRef()
    }



    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="welcome-page-wrapper">
                        <p className="welcome-text">Weather app</p>
                        <input className="city-input" placeholder="Enter location..."></input>
                        <button className="submit-btn">SUBMIT</button>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default WelcomePage;