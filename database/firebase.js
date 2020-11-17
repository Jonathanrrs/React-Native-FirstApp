import firebase from "firebase";

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "data",
    authDomain: "data",
    databaseURL: "data",
    projectId: "data",
    storageBucket: "data",
    messagingSenderId: "data",
    appId: "data"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db
  }