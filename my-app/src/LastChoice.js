import React, {Component} from 'react';

class LastChoice extends Component {
    componentWillUpdate(){
        console.log('asdsdsds')
    }
    render() {
        if (this.props.reptilesText !== '' || this.props.catsText !== '') {
            return (
                <div className="App-info">
                    <span>Last reptile: {this.props.reptilesText}<br/>Last cat: {this.props.catsText}</span>
                </div>
            )
        } else return <div className="App-info"><span>Your last choice will be shown here</span></div>
    }
}

export default LastChoice;