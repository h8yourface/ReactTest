import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackButton extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button className="BackButton">Back to choice</button></Link>
            </div>
        );
    }
}

export default BackButton;