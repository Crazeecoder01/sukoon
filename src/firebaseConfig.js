// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7D18Wvp2Zh4lJ39E3mE77w59A0ouXVVE",
  authDomain: "sukoon-d0cac.firebaseapp.com",
  projectId: "sukoon-d0cac",
  storageBucket: "sukoon-d0cac.firebasestorage.app",
  messagingSenderId: "65113707422",
  appId: "1:65113707422:web:98edcba346e0e3ba1c3c8f",
  measurementId: "G-NDXYMG7GKR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);