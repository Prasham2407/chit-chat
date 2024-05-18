import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQxGBf4ZdNVGZhCqJVvleMqRHM5tW8aqw",
  authDomain: "sip-final.firebaseapp.com",
  projectId: "sip-final",
  storageBucket: "sip-final.appspot.com",
  messagingSenderId: "243454373116",
  appId: "1:243454373116:web:8b861f648a58569f1abb79",
  measurementId: "G-F4SQSV8Q2F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()



