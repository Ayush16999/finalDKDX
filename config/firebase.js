import config from "../app.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCzDrL4iT9ag6bjxH6ZiG3c5lxP7uQyvfs",
  authDomain: "a2s-task.firebaseapp.com",
  databaseURL: "https://a2s-task-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "a2s-task",
  storageBucket: "a2s-task.appspot.com",
  messagingSenderId: "444633169019",
  appId: "1:444633169019:web:2714e076c9f048464076de",
  measurementId: "G-PYQ4BND1VD"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)
export { auth, app, db };
