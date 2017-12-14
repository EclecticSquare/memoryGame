import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
//react router is an install, the as router lets you shorten browserrouter to router


ReactDOM.render(
    <Router>
         <App /> 
    </Router>,
document.getElementById('root'));


