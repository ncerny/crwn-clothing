import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD2iUE55HHsQI_yUuKtwzwL4hcBTAqxo7Q",
  authDomain: "crwn-clothing-50c62.firebaseapp.com",
  projectId: "crwn-clothing-50c62",
  storageBucket: "crwn-clothing-50c62.appspot.com",
  messagingSenderId: "508237895049",
  appId: "1:508237895049:web:f1256d062bcc875d543d58",
  measurementId: "G-5KKW9V77MX"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;