import React, { Component } from 'react'

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ["red", "yellow", "orange", "green", "blue", "purple", "pink"],
      currentColor: ""
    }
  }

  handleColorSelection = () => {
    let randomNum = Math.floor(Math.random() * this.state.colors.length)
    this.setState({currentColor: this.state.colors[randomNum]})
  }

  render() {
    return(
      <>
        <div
          className="color-box" onClick={this.handleColorSelection}
          style={ {backgroundColor: this.state.currentColor} }
        >
        </div>
      </>
    )
  }
}
export default ColorBox
