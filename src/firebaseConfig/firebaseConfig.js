// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.local.VITE_APIKEY,
  // authDomain: import.meta.env.local.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.local.VITE_PROJECTID,
  // storageBucket: import.meta.env.local.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.local.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.local.VITE_APPID,
  ///

  apiKey: "AIzaSyAw5Rn3UQB5ZY7DJwtklxqGCvRz1a0ogRo",
  authDomain: "food-hub-be595.firebaseapp.com",
  projectId: "food-hub-be595",
  storageBucket: "food-hub-be595.firebasestorage.app",
  messagingSenderId: "995463731715",
  appId: "1:995463731715:web:be783f70233a32e6c30c36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
