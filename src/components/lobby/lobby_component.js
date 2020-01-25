import React, { Component } from 'react'
import { connect } from 'react-redux'

class LobbyComponent extends Component {


  render() {
    return (
      <h1>You are now in a game lobby</h1>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {

  }
}


export default connect(mapState, mapDispatch)(LobbyComponent)
