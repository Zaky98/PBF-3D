import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAadMmnWFQQ1d72g--zBee7Y6rUk3Bat7A",
  authDomain: "uaspbf-91ffe.firebaseapp.com",
  databaseURL: "https://uaspbf-91ffe.firebaseio.com",
  projectId: "uaspbf-91ffe",
  storageBucket: "uaspbf-91ffe.appspot.com",
  messagingSenderId: "825277577006",
  appId: "1:825277577006:web:835b9447c9a2c0fc16ecbf",
  measurementId: "G-XDTWT0D88V"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

export default firebaseConfig;
