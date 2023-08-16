
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBbX9uoWK6VlMBNzr2Sl0U1L22oZIkM8Q4",
  authDomain: "desiney-299e3.firebaseapp.com",
  projectId: "desiney-299e3",
  storageBucket: "desiney-299e3.appspot.com",
  messagingSenderId: "352671849845",
  appId: "1:352671849845:web:806383530140b313eb873c",
  measurementId: "G-C195TD3PPK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// const analytics = getAnalytics(app);


export {auth,provider,storage};
export default db;