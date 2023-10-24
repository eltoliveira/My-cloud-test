import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAesPAXeZWicmrQzkfmDSDOJh9eIOQ-JzM",
  authDomain: "donkey-tutorial.firebaseapp.com",
  projectId: "donkey-tutorial",
  storageBucket: "donkey-tutorial.appspot.com",
  messagingSenderId: "147847953873",
  appId: "1:147847953873:web:34ff171d63022f110ab4f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default firebaseConfig;
