import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipPayload: ""
    }
  }

  getInfo = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({ipPayload: payload}))
  }

  render() {
    console.log(this.state.ipPayload)
    return(
      <>
        <h1>Get Your Current Location and IP Address</h1>
        <button onClick={this.getInfo}>Click here for info</button>
        <p>Your ip address is: {this.state.ipPayload.ip}</p>
      </>
    )
  }
}
export default App
