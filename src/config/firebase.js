// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp9Y1PsLzdP8IHju0siK9KAYo9kCZuZuk",
  authDomain: "finance-landing-page-d6af5.firebaseapp.com",
  projectId: "finance-landing-page-d6af5",
  storageBucket: "finance-landing-page-d6af5.appspot.com",
  messagingSenderId: "719359775296",
  appId: "1:719359775296:web:2bdb91470ed5b44a8205a5",
  measurementId: "G-B44C4REYDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);