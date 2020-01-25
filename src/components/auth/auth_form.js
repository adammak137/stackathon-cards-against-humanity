import React from 'react'

function Auth_Form(props) {
  const image = "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85"
  // const prompt = props.prompt
  return (
    <form>
      <div >
        <h1>Register</h1>
        <img className="circular" src={image} alt={"error"} />
      </div>
      <div>
        <div>
          <label htmlFor="email"><h4>email</h4></label>
          <input type="text" placeholder="Enter Email" name="Email" required></input>
        </div>
        <div>
          <label htmlFor="password"><h4>password</h4></label>
          <input type="text" placeholder="Enter Password" name="password" required></input>
        </div>
        <div>
          <label htmlFor="email"><h4>email</h4></label>
          <input type="text" placeholder="Enter Email" name="Email" required></input>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
      </button>
    </form>
  )
}

export default Auth_Form
