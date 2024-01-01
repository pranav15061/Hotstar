// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxpx7FQZiHAeG84qKrbSrisV9M3fWXKTo",
  authDomain: "hotstar-clone-a6117.firebaseapp.com",
  projectId: "hotstar-clone-a6117",
  storageBucket: "hotstar-clone-a6117.appspot.com",
  messagingSenderId: "760428287395",
  appId: "1:760428287395:web:77aabffe2fcd767f253616",
  measurementId: "G-LHFC7QZ7P0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;