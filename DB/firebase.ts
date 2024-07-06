import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBp5uoQwMWXIPSIYEr1pXYPtvnZ2WqDEMo",
  authDomain: "activity-log-852f1.firebaseapp.com",
  databaseURL: "https://activity-log-852f1-default-rtdb.firebaseio.com",
  projectId: "activity-log-852f1",
  storageBucket: "activity-log-852f1.appspot.com",
  messagingSenderId: "222352703378",
  appId: "1:222352703378:web:e375dac3cbb68c24ae8b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
