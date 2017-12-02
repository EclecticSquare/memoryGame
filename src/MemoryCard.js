import React, {Component} from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {
    render() {
        return (
            <div className="MemoryCard">
                <div className="MemoryCardInner">
                    <div className='MemoryCardBack'>
                        <h1><img src='https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png'/></h1>
                    </div>

                    <div className='MemoryCardFront'>
                        <h4>∆</h4>
                    </div>
                </div>
            </div>
        );

    }
}

export default MemoryCard;