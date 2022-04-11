import React, { Component } from 'react'
import DynamicMenu from './components/DynamicMenu'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["steak", "brisket", "margaritas", "grilled veggies"],
      petMenu: ["cheese burgers", "puppocinos", "chicken", "kibble"],
      plate: []
    }
  }

  fillPlate = (item) => {
    console.log("fillplate", item)
    
    this.setState({plate: [...this.state.plate, item]})
  }

  render() {
    console.log("state", this.state)
    return (
      <>
      <h1>Bravo BBQ</h1>
      <h2>Adult Menu</h2>
      <DynamicMenu menuItems={ this.state.adultMenu } fillPlate={this.fillPlate}/>
      <h2>Pet Menu</h2>
      <DynamicMenu menuItems={ this.state.petMenu } fillPlate={this.fillPlate}/>
      <h3>What's on Your Plate?</h3>
      <ul>
        {this.state.plate.map(value => {
          return <li>{value}</li>
        })}
      </ul>
      </>
    )
  }
}

export default App