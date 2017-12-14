import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import './JobInfo.css';


class JobInfo extends Component {

    constructor(){
        super();
            this.state = {};
    }


    componentWillMount() {
        var jobId = this.props.match.params.id;

        console.log(jobId)
        
        axios.get('/api/jobs/' + jobId).then(({data}) => {
            console.log(data)
            this.setState(data);
        })

    }


    render() {
        return (
        <div className="Job"> 
            <h1>{this.state.title}</h1>
            <a>{this.state.company_url}<img src={this.state.company_logo} width="100"/></a>
            <div dangerouslySetInnerHTML={{__html:this.state.how_to_apply}}></div>
            <span dangerouslySetInnerHTML={{__html:this.state.description}}></span>
            
        </div>
        
    
        );
    }

}


export default JobInfo;