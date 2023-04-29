import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfcctnPJ0sCLJdGNpU8oV7_mTX-1OoTxA",
    authDomain: "games-f3b53.firebaseapp.com",
    projectId: "games-f3b53",
    storageBucket: "games-f3b53.appspot.com",
    messagingSenderId: "1047298394973",
    appId: "1:1047298394973:web:483df6b403e40eb3a3f6b4"
};


//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
