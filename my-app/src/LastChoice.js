import React, {Component} from 'react';

class LastChoice extends Component {
    render() {
        return (
            <div className="App-info">
                <span>Last reptile: {this.props.reptilesText}<br/>Last cat: {this.props.catsText}</span>
            </div>
        );
    }
}

export default LastChoice;