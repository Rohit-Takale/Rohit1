import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyBCXy0tWIcKq3-Kzrycy_Bv1Z8qIcYH81k",
  authDomain: "bloodcells-database.firebaseapp.com",
  projectId: "bloodcells-database",
  storageBucket: "bloodcells-database.appspot.com",
  messagingSenderId: "5401085338",
  appId: "1:5401085338:web:df9f4833895358b93d6623",
  measurementId: "G-XMRD656TY3",
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
