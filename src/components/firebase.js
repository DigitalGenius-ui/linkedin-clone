import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAhWY6GFdP9tLvEzjcRkPHGtvs_F8qYGog",
  authDomain: "linkedin-clone-14c4b.firebaseapp.com",
  projectId: "linkedin-clone-14c4b",
  storageBucket: "linkedin-clone-14c4b.appspot.com",
  messagingSenderId: "1075429738220",
  appId: "1:1075429738220:web:30a14bc2adbf3be35e87c9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();