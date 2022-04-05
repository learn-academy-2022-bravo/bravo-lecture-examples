import React, { Component } from 'react'

class Tracker extends Component{
  constructor(props){
    super(props)
    this.state = {
      breaks: 0,
      color:"rgb(158, 52, 235)"
    }
  }

  addBreak = () => {
    this.setState({breaks: this.state.breaks + 1})
  }

  render(){
    return(
      <>
        <p>Breaks: {this.state.breaks}</p>
        <button onClick={this.addBreak} 
        style={ {color:this.state.color} }>
          Add that self care
        </button>
      </>
    )
  }
}

export default Tracker