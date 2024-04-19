import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDQ71eZre2_u3gFtCQHTCYWtbvG540LZsU",
    authDomain: "disneyplusclone-e96a0.firebaseapp.com",
    projectId: "disneyplusclone-e96a0",
    storageBucket: "disneyplusclone-e96a0.appspot.com",
    messagingSenderId: "373643304144",
    appId: "1:373643304144:web:e1bf1e63f2867d8618d2d5",
    measurementId: "G-VN09Q3DGMS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export { auth, provider, storage };
  export default db;

  // const firebaseApp = firebase.initializeApp(firebaseConfig);