import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6fJ46TO0d7PZdzmqGFgX7tTFdp1KBmno",
  authDomain: "catch-of-the-day-robin-demo.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-robin-demo.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//normal export
export default base;
