import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Reptiles from './Reptiles';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Reptiles />, document.getElementById('root'));
registerServiceWorker();
