import React, { Component } from 'react'
import Yelling from './components/Yelling'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  render() {
    return(
      <>
        <h1>React Inputs and Events</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <Yelling apple={this.state.userInput} />
      </>
    )
  }
}
export default App
