
import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgUioMMlo9U9BQSEfr1o5G68oLfmgg1w8",
  authDomain: "auth-project-1f043.firebaseapp.com",
  projectId: "auth-project-1f043",
  storageBucket: "auth-project-1f043.appspot.com",
  messagingSenderId: "797354948914",
  appId: "1:797354948914:web:91268b86efc3b3a2bf3f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)