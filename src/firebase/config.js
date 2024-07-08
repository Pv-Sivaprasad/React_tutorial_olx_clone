import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDGr-eNvEnurZgirUnfWcr4VJwb1ZsjRsg",
  authDomain: "olx-clone-e06ce.firebaseapp.com",
  projectId: "olx-clone-e06ce",
  storageBucket: "olx-clone-e06ce.appspot.com",
  messagingSenderId: "153180297976",
  appId: "1:153180297976:web:404e4a87e6a84dab8d390d"
};


 export default firebase.initializeApp(firebaseConfig);