
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBE-3IwJv0xHAg6BHi0_NPO0XJR-Sd3nfg",
  authDomain: "complex-data-bdd19.firebaseapp.com",
  projectId: "complex-data-bdd19",
  storageBucket: "complex-data-bdd19.appspot.com",
  messagingSenderId: "37952817896",
  appId: "1:37952817896:web:62e3eaf53dc556238fd75d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
