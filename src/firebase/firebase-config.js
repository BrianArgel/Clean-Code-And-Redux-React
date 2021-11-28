import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDAzqvqtnuOZUjHv-WGBMimVXSUN9PMv34",
    authDomain: "jorunal.firebaseapp.com",
    projectId: "jorunal",
    storageBucket: "jorunal.appspot.com",
    messagingSenderId: "221277057001",
    appId: "1:221277057001:web:e856f562de54e159aaa578"
  };

  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
      db,
      googleAuthProvider,
      firebase
  }