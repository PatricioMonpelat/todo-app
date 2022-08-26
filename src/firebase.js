import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7fx_nF1w5KfPw6rhHzD18SEEOcePB-JI",
  authDomain: "todo-app-d28bb.firebaseapp.com",
  databaseURL:"https://todo-app-d28bb.firebaseapp.com",
  projectId: "todo-app-d28bb",
  storageBucket: "todo-app-d28bb.appspot.com",
  messagingSenderId: "131389509934",
  appId: "1:131389509934:web:41c4e73f94373c151a6abf",
  measurementId: "G-7F07MDRN9S"
});

const db = getFirestore(firebaseApp);


export default db;