import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDatUYBH1a7Qh47MbqVyQhrxE5ydGg6bA4",
  authDomain: "teest-6c244.firebaseapp.com",
  databaseURL: "https://teest-6c244.firebaseio.com",
  projectId: "teest-6c244",
  storageBucket: "teest-6c244.appspot.com",
  messagingSenderId: "548304550183",
  appId: "1:548304550183:web:611e7b300bbb3909219102",
  measurementId: "G-ZVJQ56N049",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
