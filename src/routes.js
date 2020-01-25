import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Register, Login } from './components/auth'
import LobbyComponent from './components/lobby/lobby_component'

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={LobbyComponent} />
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
  }
}

const mapDispatch = dispatch => {
  return {

  }
}



export default withRouter(connect(mapState, mapDispatch)(Routes))
