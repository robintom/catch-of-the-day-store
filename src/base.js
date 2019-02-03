import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: DOMAIN_FIREBASE_URL,
  databaseURL: Database_URL
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//normal export
export default base;
