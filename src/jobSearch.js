import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

import MemoryGame from './MemoryGame.js';
import JobsListItem from './JobsListItem.js';

import './jobSearch.css';
import JobInfo from './JobInfo.js'




class JobSearch extends Component {
    constructor() {
        super();
            this.state = {
                jobs: []
            }
    }
         

    componentWillMount() {
        axios.get('/api/jobs').then(({data}) => {
             console.log(data)
            this.setState({jobs:data});
        });
    }

    render() {

        var jobsJSX = this.state.jobs.map((job,index) => {
            console.log(job)
            return  <JobsListItem key={index} {...job} />
        })

        
        return( 
            <div>
                <div className="App">
                    <header className="App-header">
                    <h1 className="App-title">Jobs in Atlanta</h1>
                    <h4 className="App-subtitle">Click to explore jobs.</h4>
                    </header>
                </div>
                <div className="jobs">
                    <Switch>
                        <Route exact path="/jobs" render={() => jobsJSX} />
                        <Route path="/jobs/:id" component={JobInfo} />
                    </Switch>
                </div>
            </div>
        );
    }
}



export default JobSearch;