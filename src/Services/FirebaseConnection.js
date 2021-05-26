import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyB_1Z9YbPs33ZkPRYnQiy_Dpg3e6QmMouU",
  authDomain: "hci-hambre.firebaseapp.com",
  projectId: "hci-hambre",
  storageBucket: "hci-hambre.appspot.com",
  messagingSenderId: "304402803062",
  appId: "1:304402803062:web:2191421e41e84592c1b257",
  measurementId: "G-KK67XYNGBT"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export {
  auth,
  firestore
}