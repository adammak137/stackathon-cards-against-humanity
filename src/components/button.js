import React, { Component } from 'react'

class Button extends Component {

  render() {
    const handleSubmit = this.props.handleSubmit
    const name = 'seed'
    return (
      <form onSubmit={handleSubmit} name={name}>
        <button className="btn waves-effect waves-light" type="submit" name={name}>{name}
        </button>
      </form>
    )
  }
}

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()

    }
  }
}

export default Button
