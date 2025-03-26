import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcLffzBNHuI-JaWHFBCsn0PM2cKpAFH54",
  authDomain: "interviewapp-f8ad1.firebaseapp.com",
  projectId: "interviewapp-f8ad1",
  storageBucket: "interviewapp-f8ad1.firebasestorage.app",
  messagingSenderId: "854914578209",
  appId: "1:854914578209:web:ceb1d34be7a61e17b6b060",
  measurementId: "G-CEPLHRKMLV",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
