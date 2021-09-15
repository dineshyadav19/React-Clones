import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_KEY
const APP_ID = process.env.REACT_APP_FIREBASE_APPID
const SENDER_ID = process.env.REACT_APP_FIREBASE_SENDERID
const MEASUREMENT_ID = process.env.REACT_APP_FIREBASE_MEASUREMENTID

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflix-clone-39110.firebaseapp.com",
  projectId: "netflix-clone-39110",
  storageBucket: "netflix-clone-39110.appspot.com",
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();

export { auth, createUserWithEmailAndPassword }
export default db;