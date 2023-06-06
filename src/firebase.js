// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYAycpftspAKhvRYOKFQ7JZgWZMf18GaM",
  authDomain: "ys-youth.firebaseapp.com",
  projectId: "ys-youth",
  storageBucket: "ys-youth.appspot.com",
  messagingSenderId: "685779058335",
  appId: "1:685779058335:web:013d3d66a68320670aecaa",
  measurementId: "G-28LKLSQTHG"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);


 export const db = getFirestore(app)

 export const storage = getStorage(app)