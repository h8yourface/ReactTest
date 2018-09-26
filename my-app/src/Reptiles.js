import React, {Component} from 'react';
import './App.css';
import BackButton from './BackButton';


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
                <BackButton/>
                {animals.map((animals, index) =>
                    <button onClick={() => {this.props.ShowLastChoice({reptilesText: animals.name})}} key={animals.index}>{animals.name}</button>
                )}
            </div>
        );
    }
}

export default Reptiles;