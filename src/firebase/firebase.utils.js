
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = 
{
    apiKey: "AIzaSyA36aZma2YbwFTNGeiDllFmEt10oRJA_BY",
    authDomain: "crwn-db-aad76.firebaseapp.com",
    projectId: "crwn-db-aad76",
    storageBucket: "crwn-db-aad76.appspot.com",
    messagingSenderId: "568868012117",
    appId: "1:568868012117:web:2c72b34fda3ba2b625d4dc",
    measurementId: "G-5NVQMT6T0N"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  ///trigger google auth popup whenever we use this provider
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;