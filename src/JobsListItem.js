import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {withRouter} from 'react-router-dom';
import './JobsListItem.css';

class JobsListItem extends Component {
    clickHandler() {
       this.props.history.push('/jobs/' + this.props.id);
    }
    
    
    
    
    render() {
        return (
            <div className="JobsListItem" onClick= {this.clickHandler.bind(this)} >
                <div className="left">
                    <b>{this.props.title}</b>
                    <div>{this.props.company}</div>
                </div>
                <div className="right">
                    <b>{this.props.type}</b>
                    <div>{this.props.created_at}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(JobsListItem);