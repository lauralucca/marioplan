import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDa5deENDar8kMUhezvQfYlPhNcvG8WDV0",
    authDomain: "marioplan-5a9ba.firebaseapp.com",
    databaseURL: "https://marioplan-5a9ba.firebaseio.com",
    projectId: "marioplan-5a9ba",
    storageBucket: "marioplan-5a9ba.appspot.com",
    messagingSenderId: "64155244013"
};
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase