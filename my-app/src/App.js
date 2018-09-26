import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import LastChoice from './LastChoice';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Choose the animal you like</h1>
                </header>
                <Menu text={this.props.text}/>
                <LastChoice catsText={this.props.catsText} reptilesText={this.props.reptilesText}/>
            </div>
        );
    }
}

export default App;
