import React, { Component } from 'react'

class PreviousCard extends Component {
  render() {
    console.log(this.props.previousCard)
    return (
      <div className='last'>
        <h3>Previous Card</h3>
        {this.props.previousCard.map((card, index) => {
          return <p key={index}>{card}</p>
        })}
      </div>
    )
  }
}

export default PreviousCard