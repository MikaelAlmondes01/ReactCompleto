//Conecção com o firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXc09uyIzWJfJHb3XyDzYFK5PY_1rHkOg",
  authDomain: "miniblogreact-387cf.firebaseapp.com",
  projectId: "miniblogreact-387cf",
  storageBucket: "miniblogreact-387cf.appspot.com",
  messagingSenderId: "51453298102",
  appId: "1:51453298102:web:d222f5e8c5195b885ead17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
