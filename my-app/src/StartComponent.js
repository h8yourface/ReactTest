import React, {Component} from 'react';
import './App.css';
import App from './App';
import Reptiles from './Reptiles';
import Cats from './Cats';
import {HashRouter, Route} from 'react-router-dom';

class StartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reptilesText: '',
            catsText: ''
        };
        this.ShowLastChoice = this.ShowLastChoice.bind(this);
    }
    ShowLastChoice (params) {
        this.setState(params);
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <Route key="AppRoute" exact path="/" component={() => <App reptilesText={this.state.reptilesText} catsText={this.state.catsText}/>}/>
                    <Route key="RepRoute" path="/Reptiles" component={() => <Reptiles ShowLastChoice={this.ShowLastChoice}/>}/>
                    <Route key="CatRoute" path="/Cats" component={() => <Cats ShowLastChoice={this.ShowLastChoice}/>} />
                </div>
            </HashRouter>
        );
    }
}
export default StartComponent;