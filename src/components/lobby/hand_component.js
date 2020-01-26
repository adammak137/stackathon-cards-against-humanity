import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './whitecard'

class HandComponent extends Component {


  render() {
    return (
      <div className='handContainer'>
        <Card text="nightmares and dreams and everything else" ></Card>
        <Card text="nightmares asdfsdafdasf" ></Card>
        <Card text="nightmares asdfsadfsadf asdfsadf" ></Card>
        <Card text="nightmaresasdfsdaf sadfsdaf" ></Card>
        <Card text="nightmares asdfsdaf " ></Card>
        <Card text="nightmares asdfdf" ></Card>
        <Card text="nightmares" ></Card>
        <Card text="nightmares" ></Card>
        <Card text="nightmares" ></Card>
        <Card text="nightmares" ></Card>
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


export default connect(mapState, mapDispatch)(HandComponent)
