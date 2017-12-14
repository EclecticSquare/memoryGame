import React, { Component } from 'react';
import './MemoryGame.css';
import MemoryCard from './MemoryCard.js'


function generateDeck() {
  //return an array of card objects
  var symbols = ["√", "π", "∂","œ","÷","†","ø","ß"];
  var deck = [];

  for(var i=0;i<16;i++){
    deck.push({
      isFlipped:false, 
      symbol:symbols[i%8]
    });
  }
  shuffle(deck)
  return deck
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}







class MemoryGame extends Component {
  // Game Logic
  constructor(props) {
    super(props);
      this.state = {
        deck: generateDeck(),
        pickedCards: []

      }
  }

  pickCard(cardIndex) {
  //   if(this.state.deck[cardIndex].isFlipped){
  //     return;
  
  //   }
    var cardToFlip = {...this.state.deck[cardIndex]};
      if(cardToFlip.isFlipped){
        return;
      }
      
      cardToFlip.isFlipped = true;

      //copy our picked cards array and also add cardIndex to the end
      var newPickedCards = this.state.pickedCards.concat(cardIndex);
      var newDeck = this.state.deck.map( (card, index) => {
        if(cardIndex ==index) {
          return cardToFlip
        }
        return card
      });
      if(newPickedCards.length == 2) {
        var card1Index = newPickedCards[0];
        var card2Index = newPickedCards[1];

        var card1 = newDeck[card1Index];
        var card2 = newDeck[card2Index];

          if(card1.symbol != card2.symbol) {
            setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
          }

              newPickedCards = [];
    
          }
        this.setState({
          deck:newDeck, 
          pickedCards:newPickedCards
        })
    }


    unflipCards(card1Index, card2Index) {
        var card1 = {...this.state.deck[card1Index]};
        var card2 = {...this.state.deck[card2Index]};
        
        card1.isFlipped = false
        card2.isFlipped = false

          var newDeck = this.state.deck.map((card, index)     => {
            if(index == card1Index)  {
            return card1;
          }
            if(index == card2Index) {
              return card2;
            }
          return card;
        });
        this.setState({
          deck: newDeck
        
        });
      }














  //Renders the physical gameboard
  render() {

   var cardsJSX = this.state.deck.map( (card,index) => {
      return <MemoryCard symbol={card.symbol} 
                        isFlipped={card.isFlipped} 
                        key={index}
                        pickCard={this.pickCard.bind(this, index)}
                        />
   });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h4 className="App-subtitle">Match Cards To Win</h4>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        
        <div> 
          {cardsJSX.slice(4,8)}
        </div>

        <div>
          {cardsJSX.slice(8,12)}   
        </div>

        <div>
          {cardsJSX.slice(12,16)}       
       </div>
      
      </div>
    );
  }
}


export default MemoryGame;
