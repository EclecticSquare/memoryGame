import React, {Component} from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {

    constructor(){
        super();
        this.state = {isFlipped: false}
    }

    clickHandler() {
        this.setState( {isFlipped: !this.state.isFlipped})
    }


    render() {

        var memoryCardInnerClass = "MemoryCardInner";

        if(this.state.isFlipped){
            memoryCardInnerClass += " flipped"
        }

        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src='https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png'/>
                    </div>

                    <div className='MemoryCardFront'>
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );

    }
}

export default MemoryCard;