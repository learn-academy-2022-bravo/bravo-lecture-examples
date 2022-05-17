import React, { Component } from 'react'

class Navigation extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log(logged_in)
    console.log(current_user)
    console.log(new_user_route)
    console.log(sign_in_route)
    console.log(sign_out_route)
    return(
      <>
        <h2>Nav</h2>
        <a href={new_user_route}>Sign Up</a>
        <a href={sign_in_route}>Sign In</a>
        <a href={sign_out_route}>Sign Out</a>
      </>
    )
  }
}
export default Navigation
