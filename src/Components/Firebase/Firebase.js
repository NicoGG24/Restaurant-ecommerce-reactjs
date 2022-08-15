// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpvkA1_71pK12G7ZTxQHs1UnOsJD9D19U",
  authDomain: "reactrestaurant-ce7c7.firebaseapp.com",
  projectId: "reactrestaurant-ce7c7",
  storageBucket: "reactrestaurant-ce7c7.appspot.com",
  messagingSenderId: "44402475243",
  appId: "1:44402475243:web:4a5957c124b018d038beae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)