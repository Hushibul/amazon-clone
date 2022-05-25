import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHWcQK-pQnesRqDlHkAiBwIrgnR9stOtw",
    authDomain: "clone-4e300.firebaseapp.com",
    projectId: "clone-4e300",
    storageBucket: "clone-4e300.appspot.com",
    messagingSenderId: "278935308514",
    appId: "1:278935308514:web:916d16c4fd7fb51cd4b6bb",
    measurementId: "G-PZGMW18DZK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };