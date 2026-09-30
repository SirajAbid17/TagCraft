// Firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAX9px3JaCyRun4EFzFD-e19Aoc-c-9Kg8",
  authDomain: "tagcraftwebsite.firebaseapp.com",
  projectId: "tagcraftwebsite",
  storageBucket: "tagcraftwebsite.firebasestorage.app",
  messagingSenderId: "712095378038",
  appId: "1:712095378038:web:3160548c6acae944edcd57",
  measurementId: "G-YPWHBY3NNR",
  databaseURL: "https://tagcraftwebsite-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, database, googleProvider };