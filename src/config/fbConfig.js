// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl5GMTHJGCOiLdHWe6VzDHBWXnHGYeB1E",
  authDomain: "timetype-14b27.firebaseapp.com",
  databaseURL: "https://timetype-14b27.firebaseio.com",
  projectId: "timetype-14b27",
  storageBucket: "timetype-14b27.appspot.com",
  messagingSenderId: "567729238646",
  appId: "1:567729238646:web:22b7a6cf991f44988d2557",
  measurementId: "G-3BLMCDPBKP",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
