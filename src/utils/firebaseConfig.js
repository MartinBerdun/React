// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcN6W4ZnhrVSF17nP04P1XumAhfg9q-PI",
  authDomain: "react-coder-f24d2.firebaseapp.com",
  projectId: "react-coder-f24d2",
  storageBucket: "react-coder-f24d2.appspot.com",
  messagingSenderId: "1084120230502",
  appId: "1:1084120230502:web:cca852bfa6b393d6ef9ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);