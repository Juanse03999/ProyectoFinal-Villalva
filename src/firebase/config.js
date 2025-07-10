// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWxUk06X4D2FuzHvUfhtkvHvCBf65JS6E",
    authDomain: "proyectofinalvillalva.firebaseapp.com",
    projectId: "proyectofinalvillalva",
    storageBucket: "proyectofinalvillalva.firebasestorage.app",
    messagingSenderId: "646260616374",
    appId: "1:646260616374:web:4df21754614ea439978a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);