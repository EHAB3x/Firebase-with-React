import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaFFxsEze00tGLa6gXmvW5Z7hWqbCYwAQ",
  authDomain: "portfolio-460a8.firebaseapp.com",
  projectId: "portfolio-460a8",
  storageBucket: "portfolio-460a8.appspot.com",
  messagingSenderId: "997283210875",
  appId: "1:997283210875:web:c03043bee1d4da23a7a4de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };