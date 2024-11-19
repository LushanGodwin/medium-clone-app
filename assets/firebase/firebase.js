// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJAwkkjz5JAvZcgXVj7DoWlOmL5IBBRLs",
  authDomain: "medium-app-clone-64b1a.firebaseapp.com",
  projectId: "medium-app-clone-64b1a",
  storageBucket: "medium-app-clone-64b1a.appspot.com",
  messagingSenderId: "185846883790",
  appId: "1:185846883790:web:a80953c5687d966e31779f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, firebaseConfig };