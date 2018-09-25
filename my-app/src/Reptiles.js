import React, {Component} from 'react';

const animals = [
    {
        name: 'Snakes'
    },
    {
        name: 'Turtles'
    },
    {
        name: 'Dinosaurs'
    },
    {
        name: 'Lizards'
    }
];

class Reptiles extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Reptiles</h1>
                </header>
                {animals.map((animals, index) =>
                <button key={animals.index}>{animals.name}</button>
                )}
            </div>
        );
    }
}

export default Reptiles;