import React, { Component } from 'react'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return(
      <>
        <h1>Yo!</h1>
        <Navigation {...this.props} />
      </>
    )
  }
}
export default App
