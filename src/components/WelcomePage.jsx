import React, { Component } from 'react';
import "./WelcomePage.css"

class WelcomePage extends Component {
    state = {
        cityInput: ""
    }

    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <div className="welcome-page-wrapper">
                        <p className="welcome-text">Weather app</p>
                        <input className="city-input" onChange={e => { this.setState({ cityInput: e.target.value }) }} placeholder="Enter location..."></input>
                        <button className="submit-btn" onClick={e => { this.props.onSubmit(this.state.cityInput) }}>SUBMIT</button>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default WelcomePage;