import config from "../app.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBluUNrHfJZWPPO4AVew4j9OH6lGAi63Qw",
  authDomain: "dkdx-gaming-80da8.firebaseapp.com",
  databaseURL: "https://dkdx-gaming-80da8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dkdx-gaming-80da8",
  storageBucket: "dkdx-gaming-80da8.appspot.com",
  messagingSenderId: "826876603564",
  appId: "1:826876603564:web:a519fc53663bb35d1ec309",
  measurementId: "G-53KCSKD3L1"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)
export { auth, app, db };
