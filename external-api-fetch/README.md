# External API with Fetch 5/9/2022

Fetch - a tool that allows for asynchronous requests
- JavaScript single-threaded, it does one thing at a time
- fetch will allow the app to multitask
- fetch - send a request and wait for a response
- fetch creates a promise
- Promise - placeholder for the completion of the request/response cycle
- Promise - can exist in three states: pending, fulfilled, rejected


Create an App that returns info about our current location
- IP API: https://ipapi.co/api/?shell#complete-location5
- State object to store the data/payload
- Pick out interesting data and render to the user


```javascript
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
    .catch(error => console.log(error))
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
```
