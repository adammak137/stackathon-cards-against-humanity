import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../store/user'

function AuthForm(props) {
  const image = "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85"
  const { name, displayName, handleSubmit } = props
  return (
    props.displayName === 'Login' ? (
      <form onSubmit={handleSubmit} name={name}>
        <div >
          <h1>{displayName}</h1>
          <img className="circular" src={image} alt={"error"} />
        </div>
        <div>
          <div>
            <label htmlFor="email"><h4>email</h4></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>
          </div>
          <div>
            <label htmlFor="password"><h4>password</h4></label>
            <input type="text" placeholder="Enter Password" name="password" required></input>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name={name}>{displayName}
        </button>
      </form>
    ) : (
        <form onSubmit={handleSubmit}>
          <div >
            <h1>{displayName}</h1>
            <img className="circular" src={image} alt={"error"} />
          </div>
          <div>
            <div>
              <label htmlFor="email"><h4>email</h4></label>
              <input type="text" placeholder="Enter Email" name="email" required></input>
            </div>
            <div>
              <label htmlFor="password"><h4>password</h4></label>
              <input type="text" placeholder="Enter Password" name="password" required></input>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name={name}>{displayName}
          </button>
        </form>
      )
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Register = connect(mapSignup, mapDispatch)(AuthForm)

