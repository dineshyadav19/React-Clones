import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7Ic_4e1cc3AxnOQWoNm618sOeW0u1qEM",
  authDomain: "netflix-clone-39110.firebaseapp.com",
  projectId: "netflix-clone-39110",
  storageBucket: "netflix-clone-39110.appspot.com",
  messagingSenderId: "309113457858",
  appId: "1:309113457858:web:9bd4b467d9ca6718523f5b",
  measurementId: "G-VBVXB0QPH7"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();

export { auth, createUserWithEmailAndPassword }
export default db;