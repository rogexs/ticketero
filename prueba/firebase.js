// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6MjF0FU-vVWIfciXZ80eQ8zLN0Tt2yYA",
  authDomain: "ticketero-web.firebaseapp.com",
  projectId: "ticketero-web",
  storageBucket: "ticketero-web.appspot.com",
  messagingSenderId: "404644612973",
  appId: "1:404644612973:web:e070a9f0a1569232dee864"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)