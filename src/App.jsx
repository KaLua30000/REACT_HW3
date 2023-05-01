import { useState } from 'react'
import './App.css'
import Home from "../pages/home"
import "../public/css/style.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm_Yu3pOLVE91-309EjUZod_ZTcbB7klU",
  authDomain: "homework-33781.firebaseapp.com",
  projectId: "homework-33781",
  storageBucket: "homework-33781.appspot.com",
  messagingSenderId: "846922112140",
  appId: "1:846922112140:web:fcc9239b5202960618efa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
