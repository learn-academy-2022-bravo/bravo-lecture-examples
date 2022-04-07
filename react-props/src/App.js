
import './App.css';
import React, { Component } from 'react'
import Card from './components/Card'
import PreviousCard from './components/PreviousCard'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardDeck: ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
      currentCard: "",
      previousCard: []
    }
  }
  
  drawCard = () => {
    let randomCard = Math.floor(Math.random() * this.state.cardDeck.length)
    this.setState({
      currentCard: this.state.cardDeck[randomCard],
      previousCard: [...this.state.previousCard,
      this.state.cardDeck[randomCard]]
    })
  }
  
  
  render() {
    return(
      <>
        <h1>Draw Card</h1>
        <button onClick={this.drawCard}>Draw a Card</button>
        <Card card={this.state.currentCard}/>
        <PreviousCard previousCard={this.state.previousCard} />
      </>
    )
  }
}

export default App;


