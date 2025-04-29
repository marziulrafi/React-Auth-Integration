// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGMySjDBYMq4VG9YJOSw_rgAA0h3gvplM",
  authDomain: "react-auth-integration-fd7ce.firebaseapp.com",
  projectId: "react-auth-integration-fd7ce",
  storageBucket: "react-auth-integration-fd7ce.firebasestorage.app",
  messagingSenderId: "31813373154",
  appId: "1:31813373154:web:6452564d5e49f610d4a2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)