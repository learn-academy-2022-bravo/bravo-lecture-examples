import React, { Component } from 'react'
import Tracker from './components/Tracker'

class App extends Component{

  render(){
    return(
      <>
        <h1>Let Your Brain Rest Tracker</h1>
        <h3>Week 1</h3>
        <Tracker />
        <h3>Week 2</h3>
        <Tracker />
        <h3>Week 3</h3>
        <Tracker />
      </>
    )
  }
}

export default App