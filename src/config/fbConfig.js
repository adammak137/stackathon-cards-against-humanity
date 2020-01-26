
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBPnVc9X2VNZLLnDXrXC4wcPdfMJ9TpZBo",
  authDomain: "cards-against-fullstack.firebaseapp.com",
  databaseURL: "https://cards-against-fullstack.firebaseio.com",
  projectId: "cards-against-fullstack",
  storageBucket: "cards-against-fullstack.appspot.com",
  messagingSenderId: "21861449306",
  appId: "1:21861449306:web:98a112eab42e1a11d7a263",
  measurementId: "G-43R2XPJEDS"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log('error initializing firebase')
}

// Initialize Firebase

export default firebase
