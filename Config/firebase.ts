// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore,collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOzvT6wO1VcZf-zKjcy-6xbh-iHiVkFOc",
  authDomain: "expensify-b2e4c.firebaseapp.com",
  projectId: "expensify-b2e4c",
  storageBucket: "expensify-b2e4c.firebasestorage.app",
  messagingSenderId: "858725690466",
  appId: "1:858725690466:web:9624b4a878192b57e1f53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db,"trips");
export const expensesRef = collection(db,"expenses");


export default app;