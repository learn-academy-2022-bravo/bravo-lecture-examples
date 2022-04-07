import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className='tile'>
        <h3>Card Component</h3>
        <p>{this.props.card}</p>
      </div>
    )
  }
}

export default Card