// config/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth

const firebaseConfig = {
  apiKey: "AIzaSyDuG5aZI_-kZb0AjxuCJR4s2kIm2nz7c_w",
  authDomain: "remembra-22c21.firebaseapp.com",
  projectId: "remembra-22c21",
  storageBucket: "remembra-22c21.firebasestorage.app",
  messagingSenderId: "834917039024",
  appId: "1:834917039024:web:89c0165d0ded6b19c7b475",
  measurementId: "G-RTGW84CNC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
