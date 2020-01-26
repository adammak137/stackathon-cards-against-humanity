import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'

import { getFirestore, firestoreReducer, reduxFirestore } from 'redux-firestore';
import { getFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase/app'
import 'firebase/database'


const reducer = combineReducers({
  user,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})


const store = createStore(
  reducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase)
  ))
export default store
