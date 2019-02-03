import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "catch-of-the-day-demo-2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-demo-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//normal export
export default base;
