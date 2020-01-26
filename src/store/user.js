import history from '../history'
import { useFirebase } from 'react-redux-firebase'
import { getFirebase } from 'react-redux-firebase'
// import 'firebase/database'
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'


const defaultUser = { id: 0 }

const getUser = user => ({ type: GET_USER, user })
// const removeUser = () => ({ type: REMOVE_USER })

export const auth = (email, password, method) => async (dispatch, getState) => {
  //const fb = getFirestore()
  //fb.collection('users').add({ email, password })
  console.log(email, password)
  const fb = getFirebase()
  fb.auth().signInWithEmailAndPassword(email, password).then(() => {
    dispatch(getUser(email))
  })
}

export const initialDraw = () => dispatch => {

}




export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
