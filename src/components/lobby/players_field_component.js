import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayersField extends Component {


  render() {
    const image = "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85"
    return (
      <div className='pfContainer'>
        <div className='player-container'>
          <img className="circular" src={image} alt={"error"} />
          <p>Terry Crews</p>
          <p>0</p>
          <p>card czar </p>
        </div>
        <div className='player-container'>
          <img className="circular" src={image} alt={"error"} />
          <p>Terry Crews</p>
          <p>0</p>
          <p>being witty</p>
        </div>
        <div className='player-container'>
          <img className="circular" src={image} alt={"error"} />
          <p>Terry Crews</p>
          <p>0</p>
          <p>being witty</p>
        </div>
        <div className='player-container'>
          <img className="circular" src={image} alt={"error"} />
          <p>Terry Crews</p>
          <p>0</p>
          <p>being witty</p>
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


export default connect(mapState, mapDispatch)(PlayersField)
