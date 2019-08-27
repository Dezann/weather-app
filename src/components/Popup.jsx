import React, { Component } from 'react';
import './Popup.css'

class Popup extends Component {
    state = {}
    render() {
        return (
            <div className="popup">
                <div className="popup-content">
                    <p>{this.props.text}</p>
                </div>
                <button className="close-btn">Close</button>
            </div>
        );
    }
}

export default Popup;