// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD76mh_OF3Tbp95nmkNxp7RLmDA80paIKg",
  authDomain: "e-commerce-2a31a.firebaseapp.com",
  projectId: "e-commerce-2a31a",
  storageBucket: "e-commerce-2a31a.appspot.com",
  messagingSenderId: "375246765066",
  appId: "1:375246765066:web:403c56b108b61dad8d33f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;