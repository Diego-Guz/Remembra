// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuG5aZI_-kZb0AjxuCJR4s2kIm2nz7c_w",
  authDomain: "remembra-22c21.firebaseapp.com",
  projectId: "remembra-22c21",
  storageBucket: "remembra-22c21.firebasestorage.app",
  messagingSenderId: "834917039024",
  appId: "1:834917039024:web:89c0165d0ded6b19c7b475",
  measurementId: "G-RTGW84CNC4"
};


// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export the Firestore database
const firestore = firebase.firestore();
export { firebase, firestore };
