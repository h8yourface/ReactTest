import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Choose the animal you like</h1>
                </header>
                <button>Reptiles</button>
                <button>Birds</button>
            </div>
        );
    }
}

export default App;
