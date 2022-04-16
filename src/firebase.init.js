// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHi9LzZRS6Gm9Tc0kPSUbJ2YVRpTLasVQ",
  authDomain: "certified-career-coach.firebaseapp.com",
  projectId: "certified-career-coach",
  storageBucket: "certified-career-coach.appspot.com",
  messagingSenderId: "974806442788",
  appId: "1:974806442788:web:8f8a36f08362678006c9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
