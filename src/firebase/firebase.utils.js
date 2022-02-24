import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBj3mHBq9zSfBFGIExx_AKChOJRneyCKDg',
  authDomain: 'crown-db-eab4f.firebaseapp.com',
  projectId: 'crown-db-eab4f',
  storageBucket: 'crown-db-eab4f.appspot.com',
  messagingSenderId: '208558630871',
  appId: '1:208558630871:web:345d8ebd6b2b674098cd92',
  measurementId: 'G-VTN8V875VV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
