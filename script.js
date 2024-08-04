// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLHwoNfGAYid05jSq-ZqNoq2YofnTmeF8",
    authDomain: "tierlistweb.firebaseapp.com",
    projectId: "663745054184",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const allowedEmails = ["alloweduser1@gmail.com", "alloweduser2@gmail.com"];

document.getElementById('login-button').addEventListener('click', () => {
    signInWithPopup(auth, provider).catch(error => {
        console.error("Error during sign-in:", error);
    });
});

onAuthStateChanged(auth, user => {
    if (user) {
        if (allowedEmails.includes(user.email)) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('button-container').style.display = 'block';
        } else {
            alert('You do not have access to this button.');
            auth.signOut();
        }
    }
});

document.getElementById('private-button').addEventListener('click', () => {
    window.location.href = "add_player.html"; // Replace with the URL of your private page
});
