import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg1ny-DhM32bquhhcZK2kHbWjRmxmRNj0",
  authDomain: "challenge-a3d6a.firebaseapp.com",
  databaseURL: "https://challenge-a3d6a.firebaseio.com",
  projectId: "challenge-a3d6a",
  storageBucket: "challenge-a3d6a.appspot.com",
  messagingSenderId: "941432293870",
  appId: "1:941432293870:web:2d6c732f31a293504ee6ff",
  measurementId: "G-PNN4D23722",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };