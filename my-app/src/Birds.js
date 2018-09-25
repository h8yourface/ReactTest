import React, { Component } from 'react';

const animals = {

};

class Birds extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Birds</h1>
                </header>
                <button>Snakes</button>
                <button>Turtles</button>
                <button>Dinosaurs</button>
                <button>Lizards</button>
            </div>
        );
    }
}

export default Birds;