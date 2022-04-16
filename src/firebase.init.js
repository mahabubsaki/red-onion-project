// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrLp9smzx0kQHe0CNi5JOwtqG6TMwHhfY",
    authDomain: "red-onion-c3cf9.firebaseapp.com",
    projectId: "red-onion-c3cf9",
    storageBucket: "red-onion-c3cf9.appspot.com",
    messagingSenderId: "433974463261",
    appId: "1:433974463261:web:034bafc65de3734430aff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth