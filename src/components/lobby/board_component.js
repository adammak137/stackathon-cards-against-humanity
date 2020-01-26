import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlackCard from './blackcard'
import HandComponent from './hand_component'
import PlayersField from './players_field_component'
import FieldCard from './fieldcard'

class FieldComponent extends Component {


  render() {
    return (
      <div className="fieldComponent">
        <div className="blackCardSpace">
          <BlackCard text="Why can't I sleep at night in the morning?" />
        </div>
        <div className='allFieldCards'>
          <FieldCard text="Why can't I sleep at nigasdfasht?" />
          <FieldCard text="Why can't I sleep at nigsdafdsafht?" />
          <FieldCard text="Why can'tasdf I sleep at niasdfght?" />
          <FieldCard text="Why can't I sleep aasdft night?" />
          <FieldCard text="Why can't I asdfsleep at night?" />
        </div>
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


export default connect(mapState, mapDispatch)(FieldComponent)
