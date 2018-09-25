import React, {Component} from 'react';
import './App.css';

const animals = [
    {
        name: 'Lions'
    },
    {
        name: 'Pumas'
    },
    {
        name: 'Tigers'
    },
    {
        name: 'Cheetahs'
    }
];

class Cats extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Cats</h1>
                </header>
                {animals.map((animals, index) =>
                    <button key={animals.index}>{animals.name}</button>
                )}
            </div>
        );
    }
}

export default Cats;