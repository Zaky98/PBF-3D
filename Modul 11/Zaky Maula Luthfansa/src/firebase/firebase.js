import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Tb-tw0Rn9uxsxkqdL87vFDA3YNteXkU",
  authDomain: "projectauthentication-82441.firebaseapp.com",
  databaseURL: "https://projectauthentication-82441.firebaseio.com",
  projectId: "projectauthentication-82441",
  storageBucket: "projectauthentication-82441.appspot.com",
  messagingSenderId: "711396602828",
  appId: "1:711396602828:web:b25d7d2950cdd80a5e6369",
  measurementId: "G-BDN0L8FLMS"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
