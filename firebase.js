// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCdQR5I06GfBuM658ygcZqvOtQ-ES7ea8",
  authDomain: "my-stepluxe-project.firebaseapp.com",
  projectId: "my-stepluxe-project",
  storageBucket: "my-stepluxe-project.firebasestorage.app",
  messagingSenderId: "135795205698",
  appId: "1:135795205698:web:4cc257f2c2c1dd24bd2fdb",
  measurementId: "G-0JWJLB3T0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

initializeApp(firebaseConfig);
// Firebase imports
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

// Create Google Auth Provider
const provider = new GoogleAuthProvider();


// Select the Google sign-in button
const googleBtn = document.getElementById('google-signin-btn');

// Add click listener
googleBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // User info
      const user = result.user;
      console.log('Google Sign-In successful:', user);
      alert(`Welcome, ${user.displayName}`);
      // You can redirect or show the user's info here
    })
    .catch((error) => {
      console.error('Error during Google Sign-In:', error);
      alert('Google Sign-In failed. Check console for details.');
    });
});

#google-signin-btn {
  background-color: #4285F4;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

#google-signin-btn:hover {
  background-color: #357ae8;
}
