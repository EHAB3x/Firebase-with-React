import { firebase } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaFFxsEze00tGLa6gXmvW5Z7hWqbCYwAQ",
    authDomain: "portfolio-460a8.firebaseapp.com",
    projectId: "portfolio-460a8",
    storageBucket: "portfolio-460a8.appspot.com",
    messagingSenderId: "997283210875",
    appId: "1:997283210875:web:c03043bee1d4da23a7a4de"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();