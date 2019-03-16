import React, { Component } from 'react';

class ForecastPart extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="weekday">{this.props.weekDay}</div>
                <div className="weekday-temp">{this.props.temp}</div>
            </div>
        );
    }
}

export default ForecastPart;