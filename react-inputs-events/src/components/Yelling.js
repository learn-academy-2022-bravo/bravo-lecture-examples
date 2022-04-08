import React, { Component } from 'react'

class Yelling extends Component {

  weAreYelling = (banana) => {
    return banana.toUpperCase()
  }

  render() {
    return(
      <>
        <p>
          Why are you yelling: { this.weAreYelling(this.props.apple) }
        </p>
      </>
    )
  }
}
export default Yelling
