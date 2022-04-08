import React, { Component } from 'react'
import './App.css'
import ColorBox from './components/ColorBox'

class App extends Component {
  render() {
    return(
      <>
        <h2>Color Box Challenge</h2>
        <div className="container">
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
        </div>
      </>
    )
  }
}
export default App
