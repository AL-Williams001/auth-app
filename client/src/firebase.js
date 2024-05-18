// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-97267.firebaseapp.com",
  projectId: "mern-auth-97267",
  storageBucket: "mern-auth-97267.appspot.com",
  messagingSenderId: "72158871230",
  appId: "1:72158871230:web:d5ffd0d9d6fe7f2f3428ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
