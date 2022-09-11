// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKIRRSUC4zXpjz-gTwxqsAnCyjD_e4Wc0",
  authDomain: "snapchat-e1b3f.firebaseapp.com",
  projectId: "snapchat-e1b3f",
  storageBucket: "snapchat-e1b3f.appspot.com",
  messagingSenderId: "1013724086606",
  appId: "1:1013724086606:web:9085c8cb24aac5ebf35e1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
