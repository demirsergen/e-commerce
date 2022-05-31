import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoG6jfAAzceIF2jx-XQXVSIxlnzaWy59Y",
  authDomain: "e-commerce-19b3e.firebaseapp.com",
  projectId: "e-commerce-19b3e",
  storageBucket: "e-commerce-19b3e.appspot.com",
  messagingSenderId: "390312111114",
  appId: "1:390312111114:web:6ee712f476d753862883f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
