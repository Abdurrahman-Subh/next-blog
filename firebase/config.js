// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByTqk3BQbOkce5iERZrNdQMIRorcCW6SA",
  authDomain: "todo-f0b4c.firebaseapp.com",
  projectId: "todo-f0b4c",
  storageBucket: "todo-f0b4c.appspot.com",
  messagingSenderId: "85195064057",
  appId: "1:85195064057:web:7ba150e70452ef28249828",
  measurementId: "G-NQ5E9YKY4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
