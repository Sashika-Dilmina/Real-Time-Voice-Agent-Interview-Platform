import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDddgsq2WsQ36EIYeN4g2ZNafHCqpODkGs",
  authDomain: "meetwise-60a00.firebaseapp.com",
  projectId: "meetwise-60a00",
  storageBucket: "meetwise-60a00.firebasestorage.app",
  messagingSenderId: "867278386891",
  appId: "1:867278386891:web:e629efb7ada501d13acd4e",
  measurementId: "G-FEJL9751KY"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
