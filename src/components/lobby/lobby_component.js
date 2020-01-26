import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './blackcard'
import HandComponent from './hand_component'
import PlayersField from './players_field_component'
import Board from './board_component'

class LobbyComponent extends Component {


  render() {
    return (
      <div className='lobbyContainer'>
        <PlayersField />
        <Board />
        <HandComponent />
      </div>
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
