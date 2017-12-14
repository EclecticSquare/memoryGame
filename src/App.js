import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import MemoryGame from './MemoryGame.js'
import JobSearch from './jobSearch.js'
import './App.css';


class App extends Component{
    render() {
        return (
            <div>    
                <div className="navbar">
                
                        <Link to="/memory">Memory Game</Link>
                        <Link to="/jobs">Job Search</Link>
                    
                </div>

                        <Route path="/memory" component={MemoryGame}/>
                        <Route path="/jobs" component={JobSearch}/>
            </div>
        );
    }
}

export default App;