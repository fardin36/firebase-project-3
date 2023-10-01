// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU9ACmPV7Qyj2U3pmpjuBKsApwbV9nJ4U",
    authDomain: "fir-project-3-f76cd.firebaseapp.com",
    projectId: "fir-project-3-f76cd",
    storageBucket: "fir-project-3-f76cd.appspot.com",
    messagingSenderId: "325452095806",
    appId: "1:325452095806:web:fb0f6fd71eb9552e2e8c6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;