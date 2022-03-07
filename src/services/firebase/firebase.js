import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbp58YzsU127L2B7FJL8BSYcPUO7iLo8g",
  authDomain: "game-over-ecom.firebaseapp.com",
  projectId: "game-over-ecom",
  storageBucket: "game-over-ecom.appspot.com",
  messagingSenderId: "84519317342",
  appId: "1:84519317342:web:75e127aa0bb86f36a769cf"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

