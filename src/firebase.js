import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA7OFUKggX0OQVZA3G-RXt1tfuuG3f6ZiA",
    authDomain: "netflix-clone-5b4f3.firebaseapp.com",
    projectId: "netflix-clone-5b4f3",
    storageBucket: "netflix-clone-5b4f3.appspot.com",
    messagingSenderId: "991295657771",
    appId: "1:991295657771:web:3eb28eec8d7718a5be976e"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig)
const db= firebase.firestore()
const auth= firebase.auth()

export {auth}
export default db