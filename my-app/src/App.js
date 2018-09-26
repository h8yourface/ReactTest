import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Choose the animal you like</h1>
                </header>
                <Menu text={this.props.text}/>
                <span>{this.props.reptilesText}</span>
                <span>{this.props.catsText}</span>
            </div>
        );
    }
}

export default App;
