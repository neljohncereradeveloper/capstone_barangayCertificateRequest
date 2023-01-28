import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDcyKBj5qP3qdYJvwDjxw6y6Vcm6KPHSYE",
  authDomain: "bankasheightsimages.firebaseapp.com",
  projectId: "bankasheightsimages",
  storageBucket: "bankasheightsimages.appspot.com",
  messagingSenderId: "68604881385",
  appId: "1:68604881385:web:2b57cc447acc08070a8378",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
