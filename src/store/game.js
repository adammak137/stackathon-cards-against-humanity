import { getFirebase } from 'react-redux-firebase'


const defaultGame = {
  users: [],
  started: false,
  cardCzar: {},
  blackCard: {
    text: '',
    pick: 0
  }
}


export default function (state = defaultGame, action) {
  switch (action.type) {

    default:
      return state
  }
}
